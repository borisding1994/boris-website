import './application.css';
import Typed from 'typed.js';
// import Turbolinks from 'turbolinks';
// Turbolinks.start();


window.typingSlogan = (el) => {
  new Typed(el, {
    strings: ['An Entropy Slayer\'s Thoughts on Design, Code and the Poetic Life.',
      '同熵增做鬥爭，思考設計、編碼與詩意人生。'],
    typeSpeed: 40,
    backSpeed: 15,
    backDelay: 3500,
    loop: false,
  });
};

// window.onLoaded = (fn) => window.addEventListener('turbolinks:load', fn);
window.onLoaded = (fn) => window.addEventListener('DOMContentLoaded', fn);
window.onLoaded(() => {
  document.body.classList.add('is-loaded');
});
