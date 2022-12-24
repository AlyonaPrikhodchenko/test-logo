// const formatNumber = (x) => x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '');

const getItemPrice = (input) => input.value * input.dataset.price;

const initCounter = () => {
  const counterWrappers = document.querySelectorAll('[data-counters');

  if (counterWrappers) {
    let totalCost = 0;
    let totalPrice = document.querySelector('#total-price-items');

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
          totalPriceItem.textContent = String(input.value * input.dataset.price);
          totalPrice.textContent = Number(totalPrice.textContent) + Number(input.dataset.price);

          if (input.dataset.oldPrice) {
            totalPriceItemOld.textContent = String(input.value * input.dataset.oldPrice);
          }
          if (input.value > 1) {
            minus.disabled = false;
          }
        })

        minus.addEventListener('click', () => {
          input.value--;
          totalPriceItem.textContent = String(input.value * input.dataset.price);
          totalPrice.textContent = Number(totalPrice.textContent) - Number(input.dataset.price);

          if (input.dataset.oldPrice) {
            totalPriceItemOld.textContent = String(input.value * input.dataset.oldPrice);
          }

          if (input.value <= 1) {
            input.value = 1;
            minus.disabled = true;
          }
        })

        totalCost += getItemPrice(input);
      }
    })

    totalPrice.textContent = totalCost;
  }
}

export {initCounter};
