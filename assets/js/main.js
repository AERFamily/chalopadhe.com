const toggle = document.querySelector(".theme-toggle");
const html = document.documentElement;
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
  const dark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", dark ? "light" : "dark");
  icon.className = dark ? "fa-solid fa-moon" : "fa-solid fa-sun";
});
