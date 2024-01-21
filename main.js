const hamburger = document.querySelector(".hamburger-icon");
const mobileMenu = document.querySelector(".menu-container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("hidden");
  document.body.classList.toggle("fixed");
});
