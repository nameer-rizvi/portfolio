// Scroll reveal

function callback(entries) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  }
}

const observer = new IntersectionObserver(callback, {
  threshold: 0.1,
  rootMargin: "0px 0px -40px 0px",
});

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Stagger children in grids

document
  .querySelectorAll(".skills-grid .skill-cell, .projects-grid .project-card")
  .forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.06}s`;
  });
