import {formatNumber} from "./util.js";

const getItemPrice = (input) => input.value * input.dataset.price;

const initCounter = () => {
  const counterWrappers = document.querySelectorAll('[data-counters');

  if (counterWrappers) {
    let totalCost = 0;
    let totalCount = 0;
    let totalPrice = document.querySelector('#total-price-items');
    let productsPrice = document.querySelector('#products-price');
    let productsCounts = document.querySelector('#products-count');

    counterWrappers.forEach(counter => {
      if (counter) {
        const plus = counter.querySelector('.card__result-button--plus');
        const minus = counter.querySelector('.card__result-button--minus');
        let totalPriceItem = counter.querySelector('[data-total-price]');
        let totalPriceItemOld = counter.querySelector('[data-total-price-old]');
        let input = counter.querySelector('.card__result-quantity-value');

        if (input.value <= 1) {
          input.value = 1;
          minus.disabled = true;
        }

        plus.addEventListener('click', () => {
          input.value++
          totalPriceItem.textContent = formatNumber(input.value * input.dataset.price);
          totalPrice.textContent = Number(totalPrice.textContent) + Number(input.dataset.price);
          productsPrice.textContent = Number(totalPrice.textContent) + Number(input.dataset.price);
          productsCounts.textContent = Number(productsCounts.textContent) + Number(input.value);

          if (input.dataset.oldPrice) {
            totalPriceItemOld.textContent = formatNumber(input.value * input.dataset.oldPrice);
          }
          if (input.value > 1) {
            minus.disabled = false;
          }
        })

        minus.addEventListener('click', () => {
          input.value--;
          totalPriceItem.textContent = formatNumber(input.value * input.dataset.price);
          totalPrice.textContent = Number(totalPrice.textContent) - Number(input.dataset.price);
          productsPrice.textContent = Number(totalPrice.textContent) - Number(input.dataset.price);
          productsCounts.textContent = Number(productsCounts.textContent) - Number(input.value);

          if (input.dataset.oldPrice) {
            totalPriceItemOld.textContent = formatNumber(input.value * input.dataset.oldPrice);
          }

          if (input.value <= 1) {
            input.value = 1;
            minus.disabled = true;
          }
        })

        totalCost += getItemPrice(input);
        totalCount += Number(input.value);
      }
    })

    totalPrice.textContent = totalCost;
    productsPrice.textContent = totalCost;
    productsCounts.textContent = totalCount;

  }
}

export {initCounter};
