const btnNavEl = document.querySelector(".mobile-nav-buttons");
const bodyEl = document.body;

btnNavEl.addEventListener("click", function () {
  bodyEl.classList.toggle("nav-open");
});
