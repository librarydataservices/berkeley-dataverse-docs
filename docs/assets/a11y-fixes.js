// A11y fixes for known Quarto issues
// Remove sections when fixes are applied by new Quarto Versions

// Fix: Listing filter input missing form label
document.addEventListener("DOMContentLoaded", function () {
  var searchInputs = document.querySelectorAll("input.search.form-control");
  searchInputs.forEach(function (input) {
    if (!input.getAttribute("aria-label")) {
      input.setAttribute("aria-label", "Filter");
    }
  });
});

// Fix: Navbar toggler has role="menu" which is not appropriate
// Issue: https://github.com/quarto-dev/quarto-cli/issues/14615
// Expected fix: Quarto v1.11
document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  if (toggler && toggler.getAttribute("role") === "menu") {
    toggler.removeAttribute("role");
  }
});