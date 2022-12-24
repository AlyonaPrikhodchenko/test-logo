const initCounter = () => {
  const counterWrappers = document.querySelectorAll('[data-counters');

  if (counterWrappers) {
    counterWrappers.forEach(counter => {
      const plus = counter.querySelector('.card__result-button--plus');
      const minus = counter.querySelector('.card__result-button--minus');
      let value = counter.querySelector('.card__result-quantity-value').value;
      let valueInt = parseInt(value);

      if (valueInt <= 1) {
        valueInt = 1;
        minus.disabled = true;
      }

      plus.addEventListener('click', () => {
        valueInt++;
        if (valueInt > 1) {
          minus.disabled = false;
        }
        value = valueInt;
        console.log(value)
      })

      minus.addEventListener('click', () => {
        valueInt--;
        if (valueInt <= 1) {
          valueInt = 1;
          minus.disabled = true;
        }
        value = valueInt;
        console.log(value)
      })
    })
  }
}

export {initCounter};
