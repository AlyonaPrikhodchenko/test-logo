const SHOW_TIME = 4000;
const successContainer = document.querySelector('#success').content.querySelector('.success');
const errorContainer = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorContainer.querySelector('.error__button');

const formSubmit = document.querySelector('#form-submit');
const submitButton = formSubmit.querySelector('#submit-button');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Оформляю заказ...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Оформить заказ';
};

const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    removePopup();
  }
};

const onPopupClick = () => {
  removePopup();
};

function removePopup() {
  errorContainer.remove();
  successContainer.remove();

  document.removeEventListener('click', onPopupClick);

  document.removeEventListener('keydown', onPopupEscKeydown);
}

const showError = () => {
  document.body.append(errorContainer);
  errorContainer.append(errorButton);

  errorButton.addEventListener('click', () => {
    errorContainer.remove();
  });

  document.addEventListener('click', onPopupClick);

  document.addEventListener('keydown', onPopupEscKeydown);

  setTimeout(() => {
    errorContainer.remove();
  }, SHOW_TIME);
};

const showSuccess = () => {
  document.body.append(successContainer);

  document.addEventListener('click', onPopupClick);

  document.addEventListener('keydown', onPopupEscKeydown);

  setTimeout(() => {
    successContainer.remove();
  }, SHOW_TIME);
};

export {showError, showSuccess, blockSubmitButton, unblockSubmitButton, formSubmit};
