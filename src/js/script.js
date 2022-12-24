import {initAccordion, mediaQuery} from "./modules/accordion-phone.js";
import {countsLengthComment} from "./modules/comment-length.js";
import {initAddressHints} from "./modules/dadata.js";
// import {opensBurgerMenu} from "./modules/open-burger.js";
import {scrollsUp} from "./modules/scroll-up.js";
import {transfersPlaceholder} from "./modules/transfer-placeholder.js";
import {initMap} from "./modules/yandex-map.js";

// opensBurgerMenu();
window.addEventListener('DOMContentLoaded', () => {
  initAddressHints();
  ymaps.ready(initMap);
  transfersPlaceholder();

  countsLengthComment();

  scrollsUp();

  initAccordion(mediaQuery);
  mediaQuery.addEventListener('change', initAccordion);
})

