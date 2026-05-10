(function () {
  "use strict";

  if (typeof Element !== "undefined" && !Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector;
  }

  if (typeof Element !== "undefined" && !Element.prototype.closest) {
    Element.prototype.closest = function (selector) {
      var element = this;
      while (element) {
        if (element.matches && element.matches(selector)) {
          return element;
        }
        element = element.parentElement;
      }
      return null;
    };
  }

  if (typeof NodeList !== "undefined" && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  function addClass(name) {
    if (document && document.documentElement && document.documentElement.classList) {
      document.documentElement.classList.add(name);
    }
  }

  var supports = window.CSS && typeof window.CSS.supports === "function";
  if (!supports) {
    addClass("no-css-supports");
    return;
  }

  if (!window.CSS.supports("display", "grid")) {
    addClass("no-css-grid");
  }

  if (!window.CSS.supports("display", "flex")) {
    addClass("no-css-flex");
  }

  if (
    !window.CSS.supports("backdrop-filter", "blur(10px)") &&
    !window.CSS.supports("-webkit-backdrop-filter", "blur(10px)")
  ) {
    addClass("no-backdrop-filter");
  }
})();
