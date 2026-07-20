/* zen-mermaid.js — render <pre class="mermaid"> blocks, themed to match the site.
 * Loaded only on pages with `mermaid: true` in front matter. Uses <pre> (not
 * <div>) so the compress layout preserves the diagram's newlines, and caches
 * each diagram's source so it can re-render when the light/dark toggle flips. */
import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";

(function () {
  var nodes = Array.prototype.slice.call(document.querySelectorAll(".mermaid"));
  if (!nodes.length) return;

  // Stash the original diagram text; mermaid replaces it with an SVG on render.
  nodes.forEach(function (n) { n.dataset.src = n.textContent.trim(); });

  function theme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "neutral";
  }

  var busy = false;
  function render() {
    if (busy) return;
    busy = true;
    nodes.forEach(function (n) {
      n.removeAttribute("data-processed");
      n.innerHTML = n.dataset.src;
    });
    mermaid.initialize({ startOnLoad: false, theme: theme(), securityLevel: "strict", fontFamily: "'IBM Plex Sans', sans-serif" });
    Promise.resolve(mermaid.run({ nodes: nodes })).catch(function () {}).then(function () { busy = false; });
  }

  render();

  var toggle = document.querySelector(".zen-toggle");
  if (toggle) toggle.addEventListener("click", function () { setTimeout(render, 0); });
})();
