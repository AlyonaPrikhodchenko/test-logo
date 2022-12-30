import {contactsInputs, contactsPlaceholders, formSubmit, text} from "./util.js";
import {coordsDefault, myMap} from "./yandex-map.js";

const resetForm = () => {
  if (contactsInputs) {

    for (let i = 0; i < contactsInputs.length; i++) {
      const input = contactsInputs[i];
      let placeholder = contactsPlaceholders[i];

      placeholder.classList.remove('contacts__placeholder--hidden');

      if (input.classList.contains('contacts__input--address')) {
        text.classList.remove('contacts__button-text--js');
      }
    }

  }

  myMap.geoObjects.removeAll();
  myMap.setCenter([coordsDefault.lat, coordsDefault.lng])
  formSubmit.reset();
}

export {resetForm};
