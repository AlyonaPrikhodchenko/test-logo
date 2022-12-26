import {sendData} from "./api.js";
import {blockSubmitButton, formSubmit, showError, showSuccess, unblockSubmitButton} from "./util.js";
import {validationForm} from "./validation-form.js";

const sendsSuccess = (e) => {
  const formData = new FormData(e);
  blockSubmitButton();

  sendData(formData, () => {
    showSuccess();
    e.reset();
    unblockSubmitButton();
  }, () => {
    showError();
    unblockSubmitButton();
  })

}

const sendForm = () => {
  formSubmit.addEventListener('submit', (e) => {
    validationForm(e.target)
  })
}


export {
  sendsSuccess,
  sendForm
};
