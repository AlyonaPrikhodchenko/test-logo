import {sendData} from './api.js';
import {blockSubmitButton, showError, showSuccess, unblockSubmitButton} from './util.js';

const sendsSuccess = (form) => {
  blockSubmitButton();

  sendData(form, () => {
    showSuccess();
    unblockSubmitButton();
  }, () => {
    showError();
    unblockSubmitButton();
  })
}

export {sendsSuccess};
