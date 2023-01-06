import {
  bagCounter,
  changesTitle,
  formatNumber,
  getItemPrice,
  priceDelivery,
  priceDiscounts,
  pricePromo,
  priceStocks,
  productsCounts,
  productsPrice,
  totalPrice,
  totalPriceAll,
} from './util.js';

const initCounter = () => {
  const counterWrappers = document.querySelectorAll('[data-counters]');

  if (counterWrappers) {
    let totalCost = 0;
    let stocks = 0;

    counterWrappers.forEach(counter => {
      const plus = counter.querySelector('.card__result-button--plus');
      const minus = counter.querySelector('.card__result-button--minus');
      const totalPriceItem = counter.querySelector('[data-text-new]');
      const totalPriceItemOld = counter.querySelector('[data-text-old]');
      const input = counter.querySelector('.card__result-quantity-value');

      // Считаем общие суммы в карточке
      const countsAmountsCard = () => {
        input.dataset.totalPrice = input.value * input.dataset.price;
        input.dataset.totalPriceOld = input.value * input.dataset.oldPrice;
      }

      // Считаем сумму итоговую и выводим на экран в строку 'Итого'
      const countsAllPrice = () => {
        totalPriceAll.dataset.priceTotalAll = Number(totalPrice.dataset.total) + Number(priceDelivery.dataset.priceDelivery) - Number(priceDiscounts.dataset.priceDiscounts);
        totalPriceAll.textContent = formatNumber(totalPriceAll.dataset.priceTotalAll);
      }

      // Считаем общую скидку и выводим на экран в строку 'Скидка'
      const countsDiscounts = () => {
        priceDiscounts.dataset.priceDiscounts = Number(priceStocks.dataset.priceStocks) + Number(pricePromo.dataset.pricePromo);
        priceDiscounts.textContent = formatNumber(priceDiscounts.dataset.priceDiscounts);
      }

      // Показываем старую сумму (если старая сумма !== новой)
      const displaysOldPriceText = () => totalPriceItemOld.textContent = formatNumber(input.dataset.totalPriceOld);

      // Выводим текст с общей стоимостью в карточке
      const displaysPriceText = () => totalPriceItem.textContent = formatNumber(input.dataset.totalPrice);

      // Блокирует кнопку, если значение карточки = 1 и разблокирует, если больше 1
      const disabledButton = () => {
        if (input.value <= 1) {
          input.value = 1;
          minus.disabled = true;
        } else {
          minus.disabled = false;
        }
      }

      if (counter) {
        disabledButton()

        // При нажатии на +
        plus.addEventListener('click', () => {
          input.value++
          countsAmountsCard();

          // Считаем скидку по акциям и выводим на экран в строку 'Акции'
          priceStocks.dataset.priceStocks = Number(priceStocks.dataset.priceStocks) + Number(input.dataset.oldPrice) - Number(input.dataset.price);
          priceStocks.textContent = formatNumber(priceStocks.dataset.priceStocks);

          if (totalPriceItemOld) {
            displaysOldPriceText()
          }

          displaysPriceText()

          // Считаем сумму при клике на + и выводим на экран в строку 'Товары'
          totalPrice.dataset.total = Number(totalPrice.dataset.total) + Number(input.dataset.oldPrice);
          totalPrice.textContent = formatNumber(totalPrice.dataset.total);

          countsDiscounts();
          countsAllPrice();

          disabledButton()
          // Считаем общее количество товаров при клике на +
          productsCounts.dataset.count = Number(productsCounts.dataset.count) + 1;
          bagCounter.textContent = productsCounts.dataset.count;

          // Считаем общую сумму при клике на +
          productsPrice.dataset.productsPrice = Number(productsPrice.dataset.productsPrice) + Number(input.dataset.oldPrice);

          // Выводим количество товаров и сумму в заголовок
          changesTitle(productsCounts.dataset.count, productsPrice.dataset.productsPrice);
        })

        // При нажатии на -
        minus.addEventListener('click', () => {
          input.value--;
          countsAmountsCard();

          // Считаем скидку по акциям и выводим на экран в строку 'Акции'
          priceStocks.dataset.priceStocks = Number(priceStocks.dataset.priceStocks) - (Number(input.dataset.oldPrice) - Number(input.dataset.price));
          priceStocks.textContent = formatNumber(priceStocks.dataset.priceStocks);

          if (totalPriceItemOld) {
            displaysOldPriceText()
          }

          displaysPriceText()

          // Считаем сумму при клике на - и выводим на экран в строку 'Товары'
          totalPrice.dataset.total = Number(totalPrice.dataset.total) - Number(input.dataset.oldPrice);
          totalPrice.textContent = formatNumber(totalPrice.dataset.total);

          countsDiscounts()
          countsAllPrice();

          disabledButton()
          // Считаем общее количество товаров при клике на -
          productsCounts.dataset.count = Number(productsCounts.dataset.count) - 1;
          bagCounter.textContent = productsCounts.dataset.count;

          // Считаем общую сумму при клике на -
          productsPrice.dataset.productsPrice = Number(productsPrice.dataset.productsPrice) - Number(input.dataset.oldPrice);

          // Выводим количество товаров и сумму в заголовок
          changesTitle(productsCounts.dataset.count, productsPrice.dataset.productsPrice)

        })


        totalPriceItem.textContent = formatNumber(input.dataset.totalPrice);
        totalCost += getItemPrice(input);
        stocks += Number(input.dataset.totalPriceOld) - Number(input.dataset.totalPrice);
      }
    })

    totalPrice.dataset.total = totalCost;
    totalPrice.textContent = formatNumber(totalPrice.dataset.total);

    totalPriceAll.dataset.priceTotalAll = Number(totalPrice.dataset.total) + Number(priceDelivery.dataset.priceDelivery) - Number(priceDiscounts.dataset.priceDiscounts);
    totalPriceAll.textContent = formatNumber(totalPriceAll.dataset.priceTotalAll);

    priceStocks.dataset.priceStocks = stocks;
    priceStocks.textContent = stocks;

    priceDiscounts.dataset.priceDiscounts = Number(priceStocks.dataset.priceStocks) + Number(pricePromo.dataset.pricePromo);
    priceDiscounts.textContent = formatNumber(priceDiscounts.dataset.priceDiscounts);
  }
}

export {initCounter};
