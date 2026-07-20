/* Scroll-reveal: tags content with [data-reveal] and fades it in as it
   enters the viewport. Styling lives in _sass/layout/_animations.scss. */

const REVEAL_SELECTORS = [
  ".list__item",
  ".grid__item",
  ".feature__item",
  ".cv-section > h2",
  ".cv-item",
  ".cv-skill-category",
  ".cv-interest",
  ".cv-language",
  ".page__content > h2",
  ".page__content > p",
  ".page__content > ul",
  ".page__content > ol",
  ".page__content > blockquote",
  ".page__content > iframe",
  ".page__content > .archive__item-title",
].join(",");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const elements = document.querySelectorAll(REVEAL_SELECTORS);

  if (elements.length > 0) {
    elements.forEach((el) => el.setAttribute("data-reveal", ""));
    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, i) => {
            entry.target.style.setProperty(
              "--reveal-delay",
              `${Math.min(i * 70, 420)}ms`
            );
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          });
      },
      // Huge top margin: anything at or above the viewport counts as seen,
      // so content can't stay hidden after a fast scroll jumps past it.
      { rootMargin: "10000px 0px -8% 0px", threshold: 0.01 }
    );

    elements.forEach((el) => observer.observe(el));
  }
}
