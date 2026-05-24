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

// Theme toggle
const themeBtn = document.querySelector(".nav__theme");
function syncThemeLabel() {
  if (!themeBtn) return;
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  themeBtn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}
themeBtn?.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  syncThemeLabel();
});
syncThemeLabel();

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
