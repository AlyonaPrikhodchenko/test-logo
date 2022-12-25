import {initAccordion, mediaQuery} from "./modules/accordion-phone.js";
// import {changesName} from "./modules/change-name-list.js";
import {countsLengthComment} from "./modules/comment-length.js";
import {initAddressHints} from "./modules/dadata.js";
import {initCounter} from "./modules/init-counter.js";
import {mediaQueries, opensBurgerMenu} from "./modules/open-burger.js";
import {restoresCard} from "./modules/recover-card.js";
import {scrollsUp} from "./modules/scroll-up.js";
import {transfersPlaceholder} from "./modules/transfer-placeholder.js";
import {initMap} from "./modules/yandex-map.js";


mediaQueries.addEventListener('change', opensBurgerMenu);
opensBurgerMenu(mediaQueries);

window.addEventListener('DOMContentLoaded', () => {
  initCounter();
  restoresCard();
  // changesName();
  initAddressHints();
  ymaps.ready(initMap);
  transfersPlaceholder();

  countsLengthComment();

  scrollsUp();

  initAccordion(mediaQuery);
  mediaQuery.addEventListener('change', initAccordion);
})

