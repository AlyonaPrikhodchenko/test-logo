import {formatNumber} from './util.js';

const recoverTemplate = document.querySelector('#recover').content.querySelector('.card__recover');

const restoresCard = () => {
  let productsPrice = document.querySelector('#products-price');
  let productsCounts = document.querySelector('#products-count');
  const productsList = document.querySelector('.products__list');
  const cards = Array.from(productsList.children);

  if (cards) {

    cards.forEach(card => {
      const recoverElement = recoverTemplate.cloneNode(true);
      let cardName = recoverElement.querySelector('#card-name');

      let cardTitle = card.querySelector('.card__title');
      let deleteButton = card.querySelector('.card__delete');
      let cardContent = card.querySelector('.card__content');
      let recoverButton = recoverElement.querySelector('.card__recover-button');
      let deleteForeverButton = recoverElement.querySelector('.card__recover-delete');
      let input = card.querySelector('.card__result-quantity-value');
      let totalPrice = document.querySelector('#total-price-items');
      let priceStocks = document.querySelector('#price-stocks');
      let priceDiscounts = document.querySelector('#price-discounts');
      let pricePromo = document.querySelector('#price-promo');
      let totalPriceAll = document.querySelector('#total-price');
      let priceDelivery = document.querySelector('#price-delivery');

      if (deleteButton) {
        deleteButton.addEventListener('click', () => {
          card.removeChild(cardContent);
          productsCounts.dataset.count = Number(productsCounts.dataset.count) - Number(input.value);
          productsCounts.textContent = productsCounts.dataset.count;

          if (productsCounts.dataset.count === '0') {
            priceDelivery.dataset.priceDelivery = '0';
            priceDelivery.textContent = formatNumber(priceDelivery.dataset.priceDelivery);
          } else {
            priceDelivery.dataset.priceDelivery = '200';
            priceDelivery.textContent = formatNumber(priceDelivery.dataset.priceDelivery);
          }

          productsPrice.dataset.productsPrice = Number(productsPrice.dataset.productsPrice) - Number(input.dataset.totalPriceOld);
          productsPrice.textContent = formatNumber(productsPrice.dataset.productsPrice);

          totalPrice.dataset.total = Number(totalPrice.dataset.total) - Number(input.dataset.totalPriceOld);
          totalPrice.textContent = formatNumber(totalPrice.dataset.total);

          priceStocks.dataset.priceStocks = Number(priceStocks.dataset.priceStocks) - (Number(input.dataset.totalPriceOld) - Number(input.dataset.totalPrice));
          priceStocks.textContent = formatNumber(priceStocks.dataset.priceStocks);

          priceDiscounts.dataset.priceDiscounts = Number(priceStocks.dataset.priceStocks) + Number(pricePromo.dataset.pricePromo);
          priceDiscounts.textContent = formatNumber(priceDiscounts.dataset.priceDiscounts);

          totalPriceAll.dataset.priceTotalAll = Number(totalPrice.dataset.total) + Number(priceDelivery.dataset.priceDelivery) - Number(priceDiscounts.dataset.priceDiscounts);
          totalPriceAll.textContent = formatNumber(totalPriceAll.dataset.priceTotalAll);

          if (cardName) {
            cardName.textContent = cardTitle.textContent;
          } else {
            cardName.textContent = 'Наименование товара';
          }

          card.appendChild(recoverElement);
        })
      }

      if (recoverButton) {
        recoverButton.addEventListener('click', () => {
          card.appendChild(cardContent);
          card.removeChild(recoverElement);

          productsCounts.dataset.count = Number(productsCounts.dataset.count) + Number(input.value);
          productsCounts.textContent = productsCounts.dataset.count;

          if (productsCounts.dataset.count === '0') {
            priceDelivery.dataset.priceDelivery = '0';
            priceDelivery.textContent = formatNumber(priceDelivery.dataset.priceDelivery);
          } else {
            priceDelivery.dataset.priceDelivery = '200';
            priceDelivery.textContent = formatNumber(priceDelivery.dataset.priceDelivery);
          }

          productsPrice.dataset.productsPrice = Number(productsPrice.dataset.productsPrice) + Number(input.dataset.totalPriceOld);
          productsPrice.textContent = formatNumber(productsPrice.dataset.productsPrice);

          priceStocks.dataset.priceStocks = Number(priceStocks.dataset.priceStocks) + (Number(input.dataset.totalPriceOld) - Number(input.dataset.totalPrice));
          priceStocks.textContent = formatNumber(priceStocks.dataset.priceStocks);

          priceDiscounts.dataset.priceDiscounts = Number(priceStocks.dataset.priceStocks) + Number(pricePromo.dataset.pricePromo);
          priceDiscounts.textContent = formatNumber(priceDiscounts.dataset.priceDiscounts);

          totalPrice.dataset.total = Number(totalPrice.dataset.total) + Number(input.dataset.totalPriceOld);
          totalPrice.textContent = formatNumber(totalPrice.dataset.total);

          totalPriceAll.dataset.priceTotalAll = Number(totalPrice.dataset.total) + Number(priceDelivery.dataset.priceDelivery) - Number(priceDiscounts.dataset.priceDiscounts);
          totalPriceAll.textContent = formatNumber(totalPriceAll.dataset.priceTotalAll);

        })
      }

      if (deleteForeverButton) {
        deleteForeverButton.addEventListener('click', () => {
          card.remove();
        })
      }
    })
  }

}

export {restoresCard};
