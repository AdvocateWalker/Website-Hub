(function () {
  const yearEls = document.querySelectorAll("[data-year]");
  const year = new Date().getFullYear();
  yearEls.forEach((el) => (el.textContent = String(year)));
})();
