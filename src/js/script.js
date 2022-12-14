import {countsLengthComment} from "./modules/comment-length.js";
import {initAddressHints} from "./modules/dadata.js";
import {initCounter} from "./modules/init-counter.js";
import {mediaQueries, opensBurgerMenu} from "./modules/open-burger.js";
import {restoresCard} from "./modules/recover-card.js";
import {scrollsUp} from "./modules/scroll-up.js";
import {transfersPlaceholder} from "./modules/transfer-placeholder.js";
import {initMap} from "./modules/yandex-map.js";
import {validationForm} from "./modules/validation-form.js"
import {addsButtonPromo} from "./modules/adds-button.js";


initCounter();
restoresCard();

window.addEventListener('DOMContentLoaded', () => {
  mediaQueries.addEventListener('change', opensBurgerMenu);
  opensBurgerMenu(mediaQueries);

  initAddressHints();
  ymaps.ready(initMap);
  transfersPlaceholder();
  addsButtonPromo();

  countsLengthComment();
  validationForm();

  scrollsUp();
})

