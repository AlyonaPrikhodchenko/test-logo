import {sendData} from "./api.js";
import {blockSubmitButton, showError, showSuccess, unblockSubmitButton} from "./util.js";

const sendsSuccess = (form) => {
  const formData = new FormData(form);
  blockSubmitButton();

  sendData(formData, () => {
    showSuccess();
    unblockSubmitButton();
  }, () => {
    showError();
    unblockSubmitButton();
  })
}

export {sendsSuccess};
