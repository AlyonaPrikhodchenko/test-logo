const initCounter = () => {
  const counterWrappers = document.querySelectorAll('[data-counters');

  if (counterWrappers) {
    // let totalCost = 0;

    counterWrappers.forEach(counter => {
      const plus = counter.querySelector('.card__result-button--plus');
      const minus = counter.querySelector('.card__result-button--minus');
      let input = counter.querySelector('.card__result-quantity-value');

      if (input.value <= 1) {
        input.value = 1;
        minus.disabled = true;
      }

      plus.addEventListener('click', () => {
        input.value++
        if (input.value > 1) {
          minus.disabled = false;
        }
      })

      minus.addEventListener('click', () => {
        input.value--;
        if (input.value <= 1) {
          input.value = 1;
          minus.disabled = true;
        }
      })

      // totalCost += value * input.dataset.price;
      // console.log(totalCost)

    })
  }
}

export {initCounter};


// let prices = counter.querySelectorAll('[data-price]');
// let pricesAll = counter.querySelectorAll('[data-price-all]');

// prices.forEach(price => {
//   let priceInt = parseInt(price.textContent.replace(/\s/g, ''));

//   pricesAll.forEach(priceAll => {
//     let priceIntAll = parseInt(priceAll.textContent.replace(/\s/g, ''));

//     console.log(priceIntAll = (priceInt *= valueInt));
//     priceAll.textContent = priceIntAll;
//   })
// })
