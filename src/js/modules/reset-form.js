import {contactsInputs, contactsPlaceholders, formSubmit, text} from "./util.js";

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
  formSubmit.reset();
}

export {resetForm};
