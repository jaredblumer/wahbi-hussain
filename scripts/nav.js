// Navigation Script

// var navbar = document.getElementById("navbar");
//
// window.onscroll = function() {
//   "use strict";
//   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//     navbar.classList.add("on-scroll");
//   } else {
//     navbar.classList.remove("on-scroll");
//   }
// };

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', ()=> {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    // Burger Animation
      burger.classList.toggle('toggle');
  });

}

navSlide();
