import {countsLengthComment} from "./modules/comment-length.js";
import {initAddressHints} from "./modules/dadata.js";
import {initCounter} from "./modules/init-counter.js";
import {mediaQueries, opensBurgerMenu} from "./modules/open-burger.js";
import {restoresCard} from "./modules/recover-card.js";
import {scrollsUp} from "./modules/scroll-up.js";
import {transfersPlaceholder} from "./modules/transfer-placeholder.js";
import {initMap} from "./modules/yandex-map.js";
import {validationForm} from "./modules/validation-form.js"

mediaQueries.addEventListener('change', opensBurgerMenu);
opensBurgerMenu(mediaQueries);

window.addEventListener('DOMContentLoaded', () => {
  initCounter();
  restoresCard();
  initAddressHints();
  ymaps.ready(initMap);
  transfersPlaceholder();

  countsLengthComment();
  validationForm();

  scrollsUp();
})

