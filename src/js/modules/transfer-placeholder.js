import {contactsInputs, contactsPlaceholders, text} from "./util.js";

const transfersPlaceholder = () => {
  if (contactsInputs) {

    for (let i = 0; i < contactsInputs.length; i++) {
      const input = contactsInputs[i];
      let placeholder = contactsPlaceholders[i];

      input.addEventListener('input', () => {
        if (input.value.length > 0) {
          placeholder.classList.add('contacts__placeholder--hidden');
          if (input.classList.contains('contacts__input--address')) {
            text.classList.add('contacts__button-text--js');
          }
        } else {
          placeholder.classList.remove('contacts__placeholder--hidden');

          if (input.classList.contains('contacts__input--address')) {
            text.classList.remove('contacts__button-text--js');
          }
        }
      })
    }
  }
}

export {transfersPlaceholder};
