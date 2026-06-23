"""
Compose the four Nrtur product screenshots into a single, on-brand "artwork"
collage used as the Nrtur case-study thumbnail: each shot sits in a browser
window frame (chrome + traffic lights + URL pill), angled and staggered with
soft drop shadows, over a rich dark gradient with amber + cool glows and a
faint dot grid. Dark and light screens are interleaved for visual balance.

Drop the four files into web/public/projects/ first, then run:
    python web/scripts/compose_nrtur.py

Input (in web/public/projects/):
    nrtur-1-contacts.png   (dark)
    nrtur-2-automation.png (dark)
    nrtur-3-forms.png      (light)
    nrtur-4-funnel.png     (light)

Output: web/public/projects/nrtur.png
"""

import os
from PIL import Image, ImageDraw, ImageFilter, ImageFont

SRC_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "projects"))
OUT = os.path.join(SRC_DIR, "nrtur.png")

W, H = 1840, 1150
CONTENT_W, CONTENT_H = 760, 430   # screenshot area inside each window
CHROME = 34
RADIUS = 15

# Window placements: (file, center_x, center_y, rotation_deg).
# Interleaved so dark + light alternate on each diagonal.
CARDS = [
    ("nrtur-1-contacts.png", 520, 374, -4.0),    # dark, top-left
    ("nrtur-3-forms.png", 1322, 320, 3.5),       # light, top-right
    ("nrtur-4-funnel.png", 520, 812, 4.0),       # light, bottom-left
    ("nrtur-2-automation.png", 1322, 858, -3.5), # dark, bottom-right
]


def load_font(size):
    for p in ("C:/Windows/Fonts/segoeui.ttf", "C:/Windows/Fonts/arial.ttf"):
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()


FONT = load_font(14)


def cover(img, w, h):
    img = img.convert("RGB")
    sw, sh = img.size
    scale = max(w / sw, h / sh)
    nw, nh = int(sw * scale + 0.5), int(sh * scale + 0.5)
    img = img.resize((nw, nh), Image.LANCZOS)
    x = (nw - w) // 2
    return img.crop((x, 0, x + w, h))


def browser_card(path, label):
    cw, ch = CONTENT_W, CONTENT_H
    Wc, Hc = cw, ch + CHROME
    card = Image.new("RGBA", (Wc, Hc), (22, 22, 28, 255))

    shot = cover(Image.open(path), cw, ch)
    card.paste(shot, (0, CHROME))

    d = ImageDraw.Draw(card)
    d.rectangle((0, 0, Wc, CHROME), fill=(30, 30, 38, 255))           # chrome bar
    d.line((0, CHROME, Wc, CHROME), fill=(255, 255, 255, 22))         # divider
    for i, col in enumerate([(255, 95, 86), (255, 189, 46), (39, 201, 63)]):
        cx = 18 + i * 18
        d.ellipse((cx - 5, CHROME // 2 - 5, cx + 5, CHROME // 2 + 5), fill=col)
    pill_w = 200
    px = (Wc - pill_w) // 2
    d.rounded_rectangle((px, 7, px + pill_w, CHROME - 7), radius=9, fill=(15, 15, 19, 255))
    d.text((px + pill_w // 2, CHROME // 2), label, font=FONT, fill=(150, 150, 156), anchor="mm")

    # rounded corners + hairline border
    mask = Image.new("L", (Wc, Hc), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, Wc - 1, Hc - 1), radius=RADIUS, fill=255)
    card.putalpha(mask)
    ImageDraw.Draw(card).rounded_rectangle(
        (0, 0, Wc - 1, Hc - 1), radius=RADIUS, outline=(255, 255, 255, 46), width=2
    )
    return card


def with_shadow(card, blur=40, off=(0, 26), alpha=150):
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


def vgradient(top, bot):
    base = Image.new("RGB", (W, H))
    d = ImageDraw.Draw(base)
    for y in range(H):
        t = y / (H - 1)
        d.line((0, y, W, y), fill=tuple(int(top[i] + (bot[i] - top[i]) * t) for i in range(3)))
    return base


def main():
    base = vgradient((14, 14, 19), (7, 7, 10)).convert("RGBA")

    # glows
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse((W - 1100, -560, W + 380, 760), fill=(255, 182, 0, 64))   # amber, top-right
    gd.ellipse((-460, H - 740, 700, H + 460), fill=(108, 99, 255, 46))   # violet, bottom-left
    base = Image.alpha_composite(base, glow.filter(ImageFilter.GaussianBlur(210)))

    # faint dot grid
    grid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gdd = ImageDraw.Draw(grid)
    for y in range(0, H, 42):
        for x in range(0, W, 42):
            gdd.ellipse((x, y, x + 2, y + 2), fill=(255, 255, 255, 12))
    base = Image.alpha_composite(base, grid)

    for fn, cx, cy, rot in CARDS:
        card = browser_card(os.path.join(SRC_DIR, fn), "nrtur.io")
        card = card.rotate(rot, expand=True, resample=Image.BICUBIC)
        comp = with_shadow(card)
        base.alpha_composite(comp, (cx - comp.width // 2, cy - comp.height // 2))

    base.convert("RGB").save(OUT, "PNG")
    print("WROTE", OUT, (W, H))


if __name__ == "__main__":
    main()
