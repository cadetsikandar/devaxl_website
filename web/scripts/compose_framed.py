"""
Frame a single screenshot as a premium browser-window "artwork" on the dark
brand canvas (amber + cool glows, faint dot grid, soft drop shadow, slight tilt).
Used to give every case thumbnail one consistent look.

Usage:
    python web/scripts/compose_framed.py <src.png> <out.png> <url-label>

Example:
    python web/scripts/compose_framed.py pma-src.png pma.png productmarketingalliance.com
(paths are relative to web/public/projects/)
"""

import os
import sys
from PIL import Image, ImageDraw, ImageFilter, ImageFont

SRC_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "projects"))

W, H = 1840, 1150
CONTENT_W, CONTENT_H = 1440, 810   # 16:9 window content
CHROME = 38
RADIUS = 16


def load_font(size):
    for p in ("C:/Windows/Fonts/segoeui.ttf", "C:/Windows/Fonts/arial.ttf"):
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()


FONT = load_font(15)


def cover_top(img, w, h):
    img = img.convert("RGB")
    sw, sh = img.size
    scale = w / sw
    nh = int(sh * scale + 0.5)
    img = img.resize((w, nh), Image.LANCZOS)
    return img.crop((0, 0, w, min(h, nh)))


def browser_window(path, label):
    cw, ch = CONTENT_W, CONTENT_H
    Wc, Hc = cw, ch + CHROME
    card = Image.new("RGBA", (Wc, Hc), (22, 22, 28, 255))
    card.paste(cover_top(Image.open(path), cw, ch), (0, CHROME))

    d = ImageDraw.Draw(card)
    d.rectangle((0, 0, Wc, CHROME), fill=(30, 30, 38, 255))
    d.line((0, CHROME, Wc, CHROME), fill=(255, 255, 255, 22))
    for i, col in enumerate([(255, 95, 86), (255, 189, 46), (39, 201, 63)]):
        cx = 22 + i * 20
        d.ellipse((cx - 6, CHROME // 2 - 6, cx + 6, CHROME // 2 + 6), fill=col)
    pill_w = max(180, 16 + len(label) * 9)
    px = (Wc - pill_w) // 2
    d.rounded_rectangle((px, 8, px + pill_w, CHROME - 8), radius=9, fill=(15, 15, 19, 255))
    d.text((px + pill_w // 2, CHROME // 2), label, font=FONT, fill=(150, 150, 156), anchor="mm")

    mask = Image.new("L", (Wc, Hc), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, Wc - 1, Hc - 1), radius=RADIUS, fill=255)
    card.putalpha(mask)
    ImageDraw.Draw(card).rounded_rectangle(
        (0, 0, Wc - 1, Hc - 1), radius=RADIUS, outline=(255, 255, 255, 50), width=2
    )
    return card


def with_shadow(card, blur=52, off=(0, 36), alpha=165):
    w, h = card.size
    pad = blur * 3 + max(abs(off[0]), abs(off[1])) + 14
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
    if len(sys.argv) != 4:
        print("usage: compose_framed.py <src.png> <out.png> <label>")
        sys.exit(1)
    src = os.path.join(SRC_DIR, sys.argv[1])
    out = os.path.join(SRC_DIR, sys.argv[2])
    label = sys.argv[3]

    base = vgradient((14, 14, 19), (7, 7, 10)).convert("RGBA")

    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse((W - 1080, -540, W + 360, 720), fill=(255, 182, 0, 72))
    gd.ellipse((-440, H - 720, 680, H + 440), fill=(108, 99, 255, 42))
    base = Image.alpha_composite(base, glow.filter(ImageFilter.GaussianBlur(210)))

    grid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gdd = ImageDraw.Draw(grid)
    for y in range(0, H, 42):
        for x in range(0, W, 42):
            gdd.ellipse((x, y, x + 2, y + 2), fill=(255, 255, 255, 12))
    base = Image.alpha_composite(base, grid)

    win = browser_window(src, label)
    win = win.rotate(-3.0, expand=True, resample=Image.BICUBIC)
    comp = with_shadow(win)
    base.alpha_composite(comp, (W // 2 - comp.width // 2, 560 - comp.height // 2))

    base.convert("RGB").save(out, "PNG")
    print("WROTE", out)


if __name__ == "__main__":
    main()
