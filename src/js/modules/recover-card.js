import {
  changesTitle,
  formatNumber,
  productsCounts,
  productsList,
  productsPrice,
  submitButton,
  totalPrice,
  priceStocks,
  priceDiscounts,
  pricePromo,
  totalPriceAll,
  priceDelivery,
  getItemPrice
} from './util.js';

const recoverTemplate = document.querySelector('#recover').content.querySelector('.card__recover');

const restoresCard = () => {
  const cards = Array.from(productsList.children);

  if (cards) {
    let totalCost = 0;
    let totalCount = 0;

    cards.forEach(card => {
      const recoverElement = recoverTemplate.cloneNode(true);
      const cardName = recoverElement.querySelector('#card-name');
      const recoverButton = recoverElement.querySelector('.card__recover-button');
      const deleteForeverButton = recoverElement.querySelector('.card__recover-delete');

      const cardTitle = card.querySelector('.card__title');
      const deleteButton = card.querySelector('.card__delete');
      const cardContent = card.querySelector('.card__content');
      const input = card.querySelector('.card__result-quantity-value');

      if (deleteButton) {
        deleteButton.addEventListener('click', () => {
          card.removeChild(cardContent);

          productsCounts.dataset.count = Number(productsCounts.dataset.count) - Number(input.value);
          productsPrice.dataset.productsPrice = Number(productsPrice.dataset.productsPrice) - Number(input.dataset.totalPriceOld);
          changesTitle(productsCounts.dataset.count, productsPrice.dataset.productsPrice);

          if (productsCounts.dataset.count === '0') {
            submitButton.disabled = true;

            priceDelivery.dataset.priceDelivery = '0';
            priceDelivery.textContent = formatNumber(priceDelivery.dataset.priceDelivery);

            pricePromo.dataset.pricePromo = '0';
            pricePromo.textContent = formatNumber(pricePromo.dataset.pricePromo);
          } else {
            submitButton.disabled = false;

            priceDelivery.dataset.priceDelivery = '200';
            priceDelivery.textContent = formatNumber(priceDelivery.dataset.priceDelivery);

            pricePromo.dataset.pricePromo = '500';
            pricePromo.textContent = formatNumber(pricePromo.dataset.pricePromo);
          }

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
          productsPrice.dataset.productsPrice = Number(productsPrice.dataset.productsPrice) + Number(input.dataset.totalPriceOld);
          changesTitle(productsCounts.dataset.count, productsPrice.dataset.productsPrice)

          if (productsCounts.dataset.count === '0') {
            submitButton.disabled = true;

            priceDelivery.dataset.priceDelivery = '0';
            priceDelivery.textContent = formatNumber(priceDelivery.dataset.priceDelivery);

            pricePromo.dataset.pricePromo = '0';
            pricePromo.textContent = formatNumber(pricePromo.dataset.pricePromo);
          } else {
            submitButton.disabled = false;

            priceDelivery.dataset.priceDelivery = '200';
            priceDelivery.textContent = formatNumber(priceDelivery.dataset.priceDelivery);

            pricePromo.dataset.pricePromo = '500';
            pricePromo.textContent = formatNumber(pricePromo.dataset.pricePromo);
          }

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


      totalCost += getItemPrice(input);
      totalCount += Number(input.value);
    })

    productsCounts.dataset.count = totalCount;
    productsPrice.dataset.productsPrice = totalCost;
    changesTitle(productsCounts.dataset.count, productsPrice.dataset.productsPrice);
  }
}

export {restoresCard};
