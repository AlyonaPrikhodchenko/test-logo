import {initAccordion, mediaQuery} from "./accordion-phone.js";
import {countsLengthComment} from "./comment-length.js";
import {initAddressHints} from "./dadata.js";
// import {opensBurgerMenu} from "./open-burger.js";
import {scrollsUp} from "./scroll-up.js";
import {transfersPlaceholder} from "./transfer-placeholder.js";
import {initMap} from "./yandex-map.js";

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

