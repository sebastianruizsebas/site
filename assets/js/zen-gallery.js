/* zen-gallery.js — lightbox for the /film/ photo grid.
 *
 * Progressive enhancement: each photo is already a plain <a> to the full
 * image, so with JS off (or if this fails) clicking just opens the file.
 * With JS, clicks open an in-page overlay with keyboard navigation.
 */
(function () {
  "use strict";

  var gallery = document.querySelector(".zen-gallery");
  if (!gallery) return;

  var links = Array.prototype.slice.call(gallery.querySelectorAll(".zen-shot-link"));
  if (!links.length) return;

  var overlay, imgEl, capEl, current = -1, lastFocus = null;

  function build() {
    overlay = document.createElement("div");
    overlay.className = "zen-lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Photo viewer");
    overlay.hidden = true;
    overlay.innerHTML =
      '<button class="zen-lb-close" type="button" aria-label="Close">×</button>' +
      '<button class="zen-lb-nav zen-lb-prev" type="button" aria-label="Previous photo">‹</button>' +
      '<figure class="zen-lb-figure"><img alt=""><figcaption class="zen-lb-cap"></figcaption></figure>' +
      '<button class="zen-lb-nav zen-lb-next" type="button" aria-label="Next photo">›</button>';
    document.body.appendChild(overlay);
    imgEl = overlay.querySelector("img");
    capEl = overlay.querySelector(".zen-lb-cap");

    overlay.querySelector(".zen-lb-close").addEventListener("click", close);
    overlay.querySelector(".zen-lb-prev").addEventListener("click", function (e) {
      e.stopPropagation(); show(current - 1);
    });
    overlay.querySelector(".zen-lb-next").addEventListener("click", function (e) {
      e.stopPropagation(); show(current + 1);
    });
    /* click on the backdrop (not the image) closes */
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay || e.target.classList.contains("zen-lb-figure")) close();
    });
  }

  function show(i) {
    if (i < 0) i = links.length - 1;
    if (i >= links.length) i = 0;
    current = i;
    var link = links[i];
    imgEl.src = link.getAttribute("href");
    var inner = link.querySelector("img");
    imgEl.alt = (inner && inner.getAttribute("alt")) || "";
    capEl.textContent = (i + 1) + " / " + links.length;
  }

  function open(i) {
    if (!overlay) build();
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.documentElement.classList.add("zen-lb-open");
    show(i);
    overlay.querySelector(".zen-lb-close").focus();
    document.addEventListener("keydown", onKey);
  }

  function close() {
    if (!overlay || overlay.hidden) return;
    overlay.hidden = true;
    document.documentElement.classList.remove("zen-lb-open");
    imgEl.removeAttribute("src");
    document.removeEventListener("keydown", onKey);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function onKey(e) {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") show(current - 1);
    else if (e.key === "ArrowRight") show(current + 1);
  }

  links.forEach(function (link, i) {
    link.addEventListener("click", function (e) {
      /* let modified clicks (open-in-new-tab) and non-primary buttons through */
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      open(i);
    });
  });
})();
