import {sendData} from "./api.js";
import {blockSubmitButton, formSubmit, showError, showSuccess, unblockSubmitButton} from "./util.js";
import {validationForm} from "./validation-form.js";

const sendsForm = () => {
  formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValidate;

    if (isValidate) {
      const formData = new FormData(e.target);
      blockSubmitButton();

      sendData(formData, () => {
        showSuccess();
        e.target.reset();
        unblockSubmitButton();
      }, () => {
        showError();
        unblockSubmitButton();
      })
    }
  })
}

export {sendsForm};
