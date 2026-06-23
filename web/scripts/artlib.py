"""
artlib — compose case-study "artwork" thumbnails from one or more screenshots.

Each layout produces a 1760x1100 (16:10, card-native) PNG on the dark brand
canvas (amber-led glows + faint dot grid + vignette), with screenshots wrapped
in macOS-style browser windows (chrome, traffic lights, URL pill), soft drop
shadows and tasteful tilt. Layouts are deliberately DIFFERENT from each other.

CLI:
    python artlib.py <layout> <out.png> <label> <src1> [src2 ...]

layouts: single | duo | cascade | vstack | herofloat | grid | deck
paths are relative to web/public/projects/
"""

import os
import sys
from PIL import Image, ImageDraw, ImageFilter, ImageFont

DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "projects"))
W, H = 1760, 1100
AMBER = (255, 182, 0)
VIOLET = (108, 99, 255)
TEAL = (52, 211, 178)


def font(sz):
    for p in ("C:/Windows/Fonts/segoeui.ttf", "C:/Windows/Fonts/arial.ttf"):
        if os.path.exists(p):
            return ImageFont.truetype(p, sz)
    return ImageFont.load_default()


F = font(15)


def cover(img, w, h, bias=0.0):
    img = img.convert("RGB")
    sw, sh = img.size
    scale = max(w / sw, h / sh)
    nw, nh = int(sw * scale + 0.5), int(sh * scale + 0.5)
    img = img.resize((nw, nh), Image.LANCZOS)
    x = (nw - w) // 2
    y = int((nh - h) * bias)
    return img.crop((x, y, x + w, y + h))


def window(src, cw, ch, label, chrome=36, radius=15, bias=0.0):
    Wc, Hc = cw, ch + chrome
    card = Image.new("RGBA", (Wc, Hc), (22, 22, 28, 255))
    card.paste(cover(Image.open(os.path.join(DIR, src)), cw, ch, bias), (0, chrome))
    d = ImageDraw.Draw(card)
    d.rectangle((0, 0, Wc, chrome), fill=(30, 30, 38, 255))
    d.line((0, chrome, Wc, chrome), fill=(255, 255, 255, 22))
    r = max(4, chrome // 7)
    for i, col in enumerate([(255, 95, 86), (255, 189, 46), (39, 201, 63)]):
        cx = 18 + i * (r * 2 + 7)
        d.ellipse((cx - r, chrome // 2 - r, cx + r, chrome // 2 + r), fill=col)
    if label and cw > 360:
        pw = max(160, 16 + len(label) * 8)
        px = (Wc - pw) // 2
        d.rounded_rectangle((px, 7, px + pw, chrome - 7), radius=8, fill=(15, 15, 19, 255))
        d.text((px + pw // 2, chrome // 2), label, font=F, fill=(150, 150, 156), anchor="mm")
    mask = Image.new("L", (Wc, Hc), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, Wc - 1, Hc - 1), radius=radius, fill=255)
    card.putalpha(mask)
    ImageDraw.Draw(card).rounded_rectangle(
        (0, 0, Wc - 1, Hc - 1), radius=radius, outline=(255, 255, 255, 48), width=2
    )
    return card


def shadow(card, blur=46, off=(0, 32), alpha=160):
    w, h = card.size
    pad = blur * 3 + max(abs(off[0]), abs(off[1])) + 12
    out = Image.new("RGBA", (w + pad * 2, h + pad * 2), (0, 0, 0, 0))
    sil = Image.new("RGBA", out.size, (0, 0, 0, 0))
    a = card.split()[3].point(lambda v: int(v * alpha / 255))
    blk = Image.new("RGBA", (w, h), (0, 0, 0, 255))
    blk.putalpha(a)
    sil.paste(blk, (pad + off[0], pad + off[1]), blk)
    sil = sil.filter(ImageFilter.GaussianBlur(blur))
    sil.alpha_composite(card.convert("RGBA"), (pad, pad))
    out.alpha_composite(sil)
    return out


def place(base, card, cx, cy, rot=0.0, blur=46, off=(0, 32), alpha=160):
    if rot:
        card = card.rotate(rot, expand=True, resample=Image.BICUBIC)
    comp = shadow(card, blur, off, alpha)
    base.alpha_composite(comp, (int(cx - comp.width / 2), int(cy - comp.height / 2)))


def background(glow_xy=(0.85, 0.0), accent=AMBER, second=VIOLET, sec_xy=(0.0, 1.0)):
    base = Image.new("RGB", (W, H))
    d = ImageDraw.Draw(base)
    top, bot = (14, 14, 19), (7, 7, 10)
    for y in range(H):
        t = y / (H - 1)
        d.line((0, y, W, y), fill=tuple(int(top[i] + (bot[i] - top[i]) * t) for i in range(3)))
    base = base.convert("RGBA")
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    ax, ay = int(glow_xy[0] * W), int(glow_xy[1] * H)
    gd.ellipse((ax - 620, ay - 620, ax + 620, ay + 620), fill=accent + (78,))
    sx, sy = int(sec_xy[0] * W), int(sec_xy[1] * H)
    gd.ellipse((sx - 560, sy - 560, sx + 560, sy + 560), fill=second + (46,))
    base = Image.alpha_composite(base, glow.filter(ImageFilter.GaussianBlur(200)))
    grid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gdd = ImageDraw.Draw(grid)
    for y in range(0, H, 42):
        for x in range(0, W, 42):
            gdd.ellipse((x, y, x + 2, y + 2), fill=(255, 255, 255, 11))
    base = Image.alpha_composite(base, grid)
    # vignette to focus the centre for small cards
    vig = Image.new("L", (W, H), 0)
    ImageDraw.Draw(vig).ellipse((-W * 0.25, -H * 0.25, W * 1.25, H * 1.25), fill=255)
    vig = vig.filter(ImageFilter.GaussianBlur(260))
    dark = Image.new("RGBA", (W, H), (0, 0, 0, 120))
    dark.putalpha(Image.eval(vig, lambda v: 120 - int(v * 120 / 255)))
    base = Image.alpha_composite(base, dark)
    return base


def nth(srcs, i):
    return srcs[i % len(srcs)]


# ---- layouts -------------------------------------------------------------
def L_single(srcs, label):
    b = background((0.86, 0.04), AMBER, VIOLET, (0.04, 0.98))
    place(b, window(nth(srcs, 0), 1360, 766, label, chrome=40, bias=0.0), W / 2, H / 2 - 6,
          rot=-3, blur=58, off=(0, 40), alpha=170)
    return b


def L_duo(srcs, label):
    b = background((0.9, 0.08), AMBER, TEAL, (0.06, 0.96))
    place(b, window(nth(srcs, 0), 980, 600, label), W * 0.36, H * 0.46, rot=-5, blur=50, alpha=165)
    place(b, window(nth(srcs, 1), 980, 600, label), W * 0.66, H * 0.56, rot=4, blur=50, alpha=170)
    return b


def L_cascade(srcs, label):
    b = background((0.92, 0.9), AMBER, VIOLET, (0.06, 0.08))
    specs = [(0.30, 0.30, -6), (0.50, 0.50, -6), (0.70, 0.70, -6)]
    for i, (fx, fy, r) in enumerate(specs):
        place(b, window(nth(srcs, i), 940, 560, label if i == 0 else ""), W * fx, H * fy,
              rot=r, blur=46, off=(0, 30), alpha=150 + i * 8)
    return b


def L_vstack(srcs, label):
    b = background((0.08, 0.06), AMBER, VIOLET, (0.94, 0.96))
    specs = [(0.40, 0.26, -3), (0.58, 0.5, -3), (0.40, 0.74, -3)]
    for i, (fx, fy, r) in enumerate(specs):
        place(b, window(nth(srcs, i), 1080, 470, label if i == 0 else ""), W * fx, H * fy,
              rot=r, blur=44, off=(0, 26), alpha=150 + i * 6)
    return b


def L_herofloat(srcs, label):
    b = background((0.85, 0.06), AMBER, VIOLET, (0.05, 0.95))
    place(b, window(nth(srcs, 0), 1180, 720, label), W * 0.42, H * 0.46, rot=-3, blur=56, alpha=160)
    place(b, window(nth(srcs, 1), 560, 360, ""), W * 0.74, H * 0.30, rot=5, blur=40, alpha=175)
    place(b, window(nth(srcs, 2), 560, 360, ""), W * 0.76, H * 0.70, rot=4, blur=40, alpha=180)
    return b


def L_grid(srcs, label):
    b = background((0.9, 0.06), AMBER, VIOLET, (0.06, 0.96))
    cw, ch = 740, 416
    pos = [(0.30, 0.32, -3.5), (0.71, 0.27, 3), (0.29, 0.73, 3.5), (0.70, 0.68, -3)]
    for i, (fx, fy, r) in enumerate(pos):
        place(b, window(nth(srcs, i), cw, ch, "nrtur.io" if label == "" else label),
              W * fx, H * fy, rot=r, blur=42, off=(0, 24), alpha=155)
    return b


def L_overlap(srcs, label):
    # Two windows in strong front/back overlap (depth), distinct from side-by-side duo.
    b = background((0.86, 0.06), AMBER, VIOLET, (0.08, 0.94))
    place(b, window(nth(srcs, 1), 900, 552, ""), W * 0.40, H * 0.39,
          rot=-6, blur=44, off=(0, 28), alpha=150)
    place(b, window(nth(srcs, 0), 1140, 700, label), W * 0.585, H * 0.585,
          rot=-2, blur=58, off=(0, 42), alpha=178)
    return b


def L_deck(srcs, label):
    b = background((0.86, 0.9), AMBER, VIOLET, (0.08, 0.08))
    specs = [(0.50, 0.52, -12, 150), (0.50, 0.52, -4, 158),
             (0.50, 0.52, 4, 166), (0.50, 0.52, 12, 174)]
    for i, (fx, fy, r, al) in enumerate(specs):
        ox = (i - 1.5) * 120
        place(b, window(nth(srcs, i), 980, 600, label if i == len(specs) - 1 else ""),
              W * fx + ox, H * fy, rot=r, blur=44, off=(0, 30), alpha=al)
    return b


LAYOUTS = {
    "single": L_single, "duo": L_duo, "cascade": L_cascade, "vstack": L_vstack,
    "herofloat": L_herofloat, "grid": L_grid, "deck": L_deck, "overlap": L_overlap,
}


def main():
    if len(sys.argv) < 5:
        print("usage: artlib.py <layout> <out.png> <label> <src1> [src2 ...]")
        sys.exit(1)
    layout, out, label = sys.argv[1], sys.argv[2], sys.argv[3]
    srcs = sys.argv[4:]
    if layout not in LAYOUTS:
        print("unknown layout", layout, "->", list(LAYOUTS))
        sys.exit(1)
    img = LAYOUTS[layout](srcs, label)
    img.convert("RGB").save(os.path.join(DIR, out), "PNG")
    print("WROTE", out, layout, "from", len(srcs), "src")


if __name__ == "__main__":
    main()
