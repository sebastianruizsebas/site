Sebastian Ruiz — website redesign
=================================

This is a self-contained static page (index.html + support.js + image-slot.js + assets/images/).
No build step — it runs as-is in any browser.

To use in your repo:
1. Copy this whole folder (keep the relative structure intact) into your site,
   e.g. as /redesign/ so it's reachable at yoursite.com/redesign/.
2. Open index.html directly, or link to it from your nav, to preview it live.
3. Once you're happy, a developer can port the markup/styles into your Jekyll
   layouts — the page has no Jekyll/Liquid dependencies, it's plain HTML/CSS/JS.

Included:
- index.html        the page (home / publications / talks / teaching / portfolio / cv,
                     light + dark theme toggle in the nav)
- support.js         runtime the page needs — must stay alongside index.html
- image-slot.js       powers the drag-and-drop portrait placeholder on the home page
- assets/images/      the water background + your 4 real poster photos
