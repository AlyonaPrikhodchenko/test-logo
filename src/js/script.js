import {initAccordion, mediaQuery} from "./accordion-phone.js";

mediaQuery.addEventListener('change', initAccordion);
initAccordion(mediaQuery);
