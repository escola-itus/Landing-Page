import header from './modules/header.js';
import mobileNavbar from './modules/nav.js';
import './modules/swiper.js';
import './modules/monitor.js';
import './modules/calendly.js';
import './modules/accordion.js';
import './modules/lazyLoad.js';
import './modules/form.js';

var phoneMask = IMask(
  document.getElementById('phone'), {
    mask: '(00) 0 0000-0000'
  });

header.init();
mobileNavbar.init();
