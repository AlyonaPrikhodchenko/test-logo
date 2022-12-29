import {formatNumber} from "./util.js";

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

      if (deleteButton) {
        deleteButton.addEventListener('click', () => {
          card.removeChild(cardContent);
          productsCounts.dataset.count = Number(productsCounts.dataset.count) - Number(input.value);
          productsCounts.textContent = productsCounts.dataset.count;

          productsPrice.dataset.productsPrice = Number(productsPrice.dataset.productsPrice) - Number(input.dataset.totalPriceOld);
          productsPrice.textContent = formatNumber(productsPrice.dataset.productsPrice);

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

          productsPrice.dataset.productsPrice = Number(productsPrice.dataset.productsPrice) + Number(input.dataset.totalPriceOld);
          productsPrice.textContent = formatNumber(productsPrice.dataset.productsPrice);
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

export {restoresCard}
