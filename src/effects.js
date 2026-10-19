export function initEffects() {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const bar = document.getElementById("bar");
  const onScroll = () => {
    const s = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${s > 0 ? scrollY / s : 0})`;
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  let io;
  if (!reduce && "IntersectionObserver" in window) {
    io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.1 });
    document.querySelectorAll("section, .rtm").forEach((el) => { el.classList.add("rv"); io.observe(el); });
  }
  return () => { removeEventListener("scroll", onScroll); io && io.disconnect(); };
}
