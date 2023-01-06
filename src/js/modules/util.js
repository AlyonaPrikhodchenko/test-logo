const SHOW_TIME = 4000;

const contactsInputs = document.querySelectorAll('.contacts__input');
const contactsPlaceholders = document.querySelectorAll('.contacts__placeholder');
const text = document.querySelector('.contacts__button-text');

const promoInput = document.querySelector('.submit__promo-input');
const promoButtonText = document.querySelector('.submit__promo-button-text');

const successContainer = document.querySelector('#success').content.querySelector('.success');
const errorContainer = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorContainer.querySelector('.error__button');

const formSubmit = document.querySelector('#form-submit');
const submitButton = formSubmit.querySelector('#submit-button');

const productsTitle = document.querySelector('.products__legend');
const productsTitleText = productsTitle.querySelector('.products__legend-text');

const productsCounts = productsTitle.querySelector('#products-count');
const productsPrice = productsTitle.querySelector('#products-price');
const productsWord = productsTitle.querySelector('.products__word');

const productsList = document.querySelector('.products__list');

const totalPrice = document.querySelector('#total-price-items');
const priceStocks = document.querySelector('#price-stocks');
const priceDiscounts = document.querySelector('#price-discounts');
const pricePromo = document.querySelector('#price-promo');
const totalPriceAll = document.querySelector('#total-price');
const priceDelivery = document.querySelector('#price-delivery');

// Блокирует кнопку во время отправки формы
const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Оформляю заказ...';
};

// Разблокирует кнопку
const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Оформить заказ';
};

// Находит кнопку Esc
const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

// Закрытвает попап при нажатии Esc
const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    removePopup();
  }
};

// Удаляет попап
const onPopupClick = () => {
  removePopup();
};

// Удаляет попап и обработчик событий
function removePopup() {
  errorContainer.remove();
  successContainer.remove();

  document.removeEventListener('click', onPopupClick);

  document.removeEventListener('keydown', onPopupEscKeydown);
}

// Показывает сообщение при неудачной отправке формы, закрывает попап при клике мимо окна, на кнопку или на Esc
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

// Показывает сообщение при удачной отправке формы, закрывает попап при клике мимо окна или на Esc
const showSuccess = () => {
  document.body.append(successContainer);

  document.addEventListener('click', onPopupClick);

  document.addEventListener('keydown', onPopupEscKeydown);

  setTimeout(() => {
    successContainer.remove();
  }, SHOW_TIME);
};

// Форматирует суммы товаров что-бы был пробел
const formatNumber = (number) => {
  const arrSymbols = String(number).split('');
  arrSymbols.splice(-3, 0, '\u00A0');
  const numberSpace = arrSymbols.join('');
  return numberSpace;
}

// Меняет слово 'товар' в заголовке карточек при разном количестве товаров
const changeWord = (count) => {
  const countProcent = count % 100;
  const countProcentTen = countProcent % 10;

  if (countProcent >= 10 && countProcent <= 19) {
    productsWord.textContent = 'товаров';
    return;
  }

  if (countProcentTen === 1) {
    productsWord.textContent = 'товар';
    return;
  }

  if (countProcentTen >= 2 && countProcentTen <= 4) {
    productsWord.textContent = 'товара';
    return;
  }

  if (countProcentTen === 0 || (countProcentTen >= 5 && countProcentTen <= 9)) {
    productsWord.textContent = 'товаров';
    return;
  }
}

// Меняет заголовок у списка карточек товаров
const changesTitle = (count, price) => {
  productsCounts.textContent = count;
  productsPrice.textContent = formatNumber(price);
  changeWord(count);
}

// Подсчитывает общую стоимость товара в карточке
const getItemPrice = (input) => input.value * input.dataset.oldPrice;

export {
  showError,
  showSuccess,
  blockSubmitButton,
  unblockSubmitButton,
  formSubmit,
  formatNumber,
  contactsInputs,
  contactsPlaceholders,
  text,
  promoInput,
  promoButtonText,
  changesTitle,
  submitButton,
  productsList,
  productsCounts,
  productsPrice,
  totalPrice,
  priceStocks,
  priceDiscounts,
  pricePromo,
  totalPriceAll,
  priceDelivery,
  getItemPrice,
  productsTitle,
  productsTitleText
};
