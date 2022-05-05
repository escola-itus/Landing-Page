import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const body = document.getElementsByTagName("BODY")[0];
let slidesPerView = body.offsetWidth > 550 ? 2 : 1

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  slidesPerView,
  loopedSlides: null,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
});