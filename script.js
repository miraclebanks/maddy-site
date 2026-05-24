// Mobile menu toggle
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");

toggle?.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

// Close menu when a link is tapped
links?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    links.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
