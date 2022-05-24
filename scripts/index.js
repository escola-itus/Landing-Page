var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-accordion");
    this.parentElement.classList.toggle("active-item");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const calendly = document.querySelectorAll('.calendly');
calendly.forEach(element => element.addEventListener('click', () => {
  Calendly.initPopupWidget({
    url: 'https://calendly.com/itus_escola/aula-experimental?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=3f9a15'}
  );
  return false;
}))

class Header {
  constructor(header) {
    this.header = document.querySelector(header);
    this.activeClass = "active";
    this.handleScroll = this.handleScroll.bind(this);
  }

  changeClass() {
    if(window.scrollY > 0) {
      this.header.classList.add(this.activeClass);
    } else {
      this.header.classList.remove(this.activeClass);
    }
  }

  handleScroll() {
    this.changeClass();
  }

  addScrollEvent() {
    window.addEventListener("scroll", this.handleScroll);
  }

  init() {
    this.addScrollEvent();
    return this;
  }
}

const header = new Header(
  "#header",
);

document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 500);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
});

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getVideo() {
  await sleep(1)
  const containers = document.querySelectorAll('.elasticMedia-container[data-src]');
  for (let i = 0; i < containers.length; i++) {
    var src = containers[i].getAttribute('data-src');
    containers[i].innerHTML = `<iframe class="video elasticMedia-container" src="${src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
}

setTimeout(getVideo, 500);

/*=============== SHOW MODAL ===============*/
export const showModal = (openButton, modalContent) =>{
  const openBtn = document.getElementById(openButton),
  modalContainer = document.getElementById(modalContent)
  
  if(openBtn && modalContainer){
      openBtn.addEventListener('click', ()=>{
          modalContainer.classList.add('show-modal')
      })
  }
}
showModal('open-modal','modal-container');
showModal('open-modal2','modal-container2');
showModal('open-modal3','modal-container3');

/*=============== CLOSE MODAL ===============*/
export const closeBtn = document.querySelectorAll('.close-modal')
export const closeBtn2 = document.querySelectorAll('.close-modal2')
export const closeBtn3 = document.querySelectorAll('.close-modal3')

export function closeModal(){
  const modalContainer = document.getElementById('modal-container')
  modalContainer.classList.remove('show-modal')
}
export function closeModal2(){
  const modalContainer = document.getElementById('modal-container2')
  modalContainer.classList.remove('show-modal')
}
export function closeModal3(){
  const modalContainer = document.getElementById('modal-container3')
  modalContainer.classList.remove('show-modal')
}
closeBtn.forEach(c => c.addEventListener('click', closeModal))
closeBtn.forEach(c => c.addEventListener('click', closeModal2))
closeBtn.forEach(c => c.addEventListener('click', closeModal3))

/*=============== SHOW MODAL ===============*/
export const showGif = (openButton, gifContent) =>{
  const openBtn = document.getElementById(openButton),
  gifContainer = document.getElementById(gifContent),
  selectContainer = document.getElementsByClassName('container-select')[0],
  gameLogo = document.getElementsByClassName('game-logo')[0],
  mouse = document.getElementById('click');
  
  
  if(openBtn && gifContainer){
    openBtn.addEventListener('click', ()=>{
      selectContainer.classList.add('hide')
      gameLogo.classList.add('hide')
      gifContainer.classList.add('show-gif')
      mouse.classList.add('hide')
      const videos = document.getElementsByClassName('gif');
      videos[0].pause();
      videos[0].load();
      videos[0].play();
      videos[1].pause();
      videos[1].load();
      videos[1].play();
    })
  }
}
showGif('open-gif','gif-container');
showGif('open-gif2','gif-container2');

/*=============== CLOSE MODAL ===============*/
export const closeGif = document.getElementsByClassName('close-gif');

export function closeGifContainer(gifContent){
  const gifContainer = document.getElementById(gifContent),
  selectContainer = document.getElementsByClassName('container-select')[0],
  gameLogo = document.getElementsByClassName('game-logo')[0];
  selectContainer.classList.remove('hide');
  gameLogo.classList.remove('hide');
  gifContainer.classList.remove('show-gif');
}

closeGif[0].addEventListener('click', () => closeGifContainer('gif-container2'));
closeGif[1].addEventListener('click', () => closeGifContainer('gif-container'));

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
      link.addEventListener("click", this.handleClick);
    });
    
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);

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

header.init();
mobileNavbar.init();