import {initAccordion, mediaQuery} from "./accordion-phone.js";
import {countsLengthComment} from "./comment-length.js";
import {transfersPlaceholder} from "./transfer-placeholder.js";

transfersPlaceholder();

countsLengthComment();

initAccordion(mediaQuery);
mediaQuery.addEventListener('change', initAccordion);
