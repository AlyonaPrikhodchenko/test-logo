import {formatNumber} from "./util.js";

const getItemPrice = (input) => input.value * input.dataset.price;

const initCounter = () => {
  const counterWrappers = document.querySelectorAll('[data-counters');

  if (counterWrappers) {
    let totalCost = 0;
    let stocks = 0;
    let discounts = 0;

    let totalPrice = document.querySelector('#total-price-items');
    let totalPriceAll = document.querySelector('#total-price');
    let priceDelivery = document.querySelector('#price-delivery');
    let priceStocks = document.querySelector('#price-stocks');
    let priceDiscounts = document.querySelector('#price-discounts');
    let pricePromo = document.querySelector('#price-promo');

    let productsPrice = document.querySelector('#products-price');
    let productsCounts = document.querySelector('#products-count');

    counterWrappers.forEach(counter => {
      const plus = counter.querySelector('.card__result-button--plus');
      const minus = counter.querySelector('.card__result-button--minus');
      let totalPriceItem = counter.querySelector('[data-text-new]');
      let totalPriceItemOld = counter.querySelector('[data-text-old]');
      let input = counter.querySelector('.card__result-quantity-value');

      if (counter) {

        if (input.value <= 1) {
          input.value = 1;
          minus.disabled = true;
        }

        totalPriceItem.textContent = formatNumber(input.dataset.totalPrice);

        if (input.dataset.totalPriceOld && totalPriceItemOld) {
          input.dataset.totalPriceOld = input.value * input.dataset.oldPrice;
          totalPriceItemOld.textContent = formatNumber(input.dataset.totalPriceOld);
        }

        plus.addEventListener('click', () => {
          input.value++
          input.dataset.totalPrice = input.value * input.dataset.price;

          if (input.dataset.totalPriceOld && totalPriceItemOld) {
            input.dataset.totalPriceOld = input.value * input.dataset.oldPrice;
            totalPriceItemOld.textContent = formatNumber(input.dataset.totalPriceOld);

            priceStocks.dataset.priceStocks = Number(input.dataset.totalPriceOld) - Number(input.dataset.totalPrice);
            priceStocks.textContent = formatNumber(priceStocks.dataset.priceStocks);
          }

          totalPriceItem.textContent = formatNumber(input.dataset.totalPrice);
          totalPrice.dataset.total = Number(totalPrice.dataset.total) + Number(input.dataset.price);
          totalPrice.textContent = formatNumber(totalPrice.dataset.total);
          totalPriceAll.dataset.priceTotalAll = Number(totalPrice.dataset.total) + Number(priceDelivery.dataset.priceDelivery) - Number(priceDiscounts.dataset.priceDiscounts);
          totalPriceAll.textContent = formatNumber(totalPriceAll.dataset.priceTotalAll);

          priceDiscounts.dataset.priceDiscounts = Number(priceStocks.dataset.priceStocks) + Number(pricePromo.dataset.pricePromo);
          priceDiscounts.textContent = formatNumber(priceDiscounts.dataset.priceDiscounts);

          if (input.value > 1) {
            minus.disabled = false;
          }
        })

        minus.addEventListener('click', () => {
          input.value--;
          input.dataset.totalPrice = input.value * input.dataset.price;

          if (input.dataset.totalPriceOld && totalPriceItemOld) {
            input.dataset.totalPriceOld = input.value * input.dataset.oldPrice;
            totalPriceItemOld.textContent = formatNumber(input.dataset.totalPriceOld);

            priceStocks.dataset.priceStocks = Number(input.dataset.totalPriceOld) - Number(input.dataset.totalPrice);
            priceStocks.textContent = formatNumber(priceStocks.dataset.priceStocks);
          }

          totalPriceItem.textContent = formatNumber(input.dataset.totalPrice);
          totalPrice.dataset.total = Number(totalPrice.dataset.total) - Number(input.dataset.price);
          totalPrice.textContent = formatNumber(totalPrice.dataset.total);

          totalPriceAll.dataset.priceTotalAll = Number(totalPrice.dataset.total) + Number(priceDelivery.dataset.priceDelivery) - Number(priceDiscounts.dataset.priceDiscounts);
          totalPriceAll.textContent = formatNumber(totalPriceAll.dataset.priceTotalAll);

          priceDiscounts.dataset.priceDiscounts = Number(priceStocks.dataset.priceStocks) + Number(pricePromo.dataset.pricePromo);
          priceDiscounts.textContent = formatNumber(priceDiscounts.dataset.priceDiscounts);

          if (input.value <= 1) {
            input.value = 1;
            minus.disabled = true;
          }
        })

        if (input.dataset.totalPriceOld) {
          stocks = Number(input.dataset.totalPriceOld) - Number(input.dataset.totalPrice);
        }

        totalPriceItem.textContent = formatNumber(input.dataset.totalPrice);
        totalCost += getItemPrice(input);
      }
    })

    totalPrice.dataset.total = totalCost;
    totalPrice.textContent = formatNumber(totalPrice.dataset.total);

    totalPriceAll.dataset.priceTotalAll = Number(totalPrice.dataset.total) + Number(priceDelivery.dataset.priceDelivery) - Number(priceDiscounts.dataset.priceDiscounts);
    totalPriceAll.textContent = formatNumber(totalPriceAll.dataset.priceTotalAll);

    priceStocks.dataset.priceStocks = stocks;
    priceStocks.textContent = formatNumber(priceStocks.dataset.priceStocks);

    priceDiscounts.dataset.priceDiscounts = Number(priceStocks.dataset.priceStocks) + Number(pricePromo.dataset.pricePromo);
    priceDiscounts.textContent = formatNumber(priceDiscounts.dataset.priceDiscounts);
  }
}

export {initCounter};
