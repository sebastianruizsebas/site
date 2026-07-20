#!/usr/bin/env python3
"""Downscale + recompress photos for the web (e.g. 35mm scans for /film/).

Usage:
    .venv/bin/python scripts/optimize_film.py ~/scans/*.jpg

Reads the given image files and writes optimized JPEG copies into images/film/,
leaving the originals untouched. Keep raw scans OUTSIDE the repo so git history
and the site stay small.

Knobs: MAX_EDGE caps the longest side in px; QUALITY is JPEG quality (0-95).
"""
import os
import sys
from PIL import Image, ImageOps

MAX_EDGE = 2000   # longest side, px — plenty for the gallery + lightbox on retina
QUALITY = 82      # JPEG quality
OUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "images", "film"
)


def optimize(src, out_dir=OUT_DIR):
    im = Image.open(src)
    im = ImageOps.exif_transpose(im)   # honor the scan/camera rotation, then drop EXIF
    im = im.convert("RGB")             # JPEG has no alpha channel
    im.thumbnail((MAX_EDGE, MAX_EDGE), Image.Resampling.LANCZOS)  # only ever shrinks
    os.makedirs(out_dir, exist_ok=True)
    name = os.path.splitext(os.path.basename(src))[0] + ".jpg"
    dst = os.path.join(out_dir, name)
    im.save(dst, "JPEG", quality=QUALITY, optimize=True, progressive=True)
    return dst


def main(argv):
    if not argv:
        print(__doc__)
        return 1
    for src in argv:
        try:
            before = os.path.getsize(src)
            dst = optimize(src)
            after = os.path.getsize(dst)
            print(f"{os.path.basename(src)}  {before // 1024} KB -> {after // 1024} KB  ->  {dst}")
        except Exception as e:
            print(f"skip {src}: {e}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
