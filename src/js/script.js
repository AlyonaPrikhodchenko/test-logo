import {initAccordion, mediaQuery} from "./accordion-phone.js";
import {countsLengthComment} from "./comment-length.js";
import {opensBurgerMenu} from "./open-burger.js";
import {scrollsUp} from "./scroll-up.js";
import {transfersPlaceholder} from "./transfer-placeholder.js";

opensBurgerMenu();

transfersPlaceholder();

countsLengthComment();

scrollsUp();

initAccordion(mediaQuery);
mediaQuery.addEventListener('change', initAccordion);
