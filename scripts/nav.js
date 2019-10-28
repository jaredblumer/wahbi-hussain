// Navigation Script

var navbar = document.getElementById("navbar");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navbar.classList.add("on-scroll");
  } else {
    navbar.classList.remove("on-scroll");
  }
};

// Menu Toggle Script

function toggle() {
  var links = document.getElementById("menu-links");
  if (links.style.display === "block") {
    links.style.display = "none !important";
  } else {
    links.style.display = "block !important";
  }
}
