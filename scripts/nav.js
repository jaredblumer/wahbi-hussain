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
