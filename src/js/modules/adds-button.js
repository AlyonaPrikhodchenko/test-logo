import {promoButtonText, promoInput} from './util.js';

const addsButtonPromo = () => {
  if (promoInput) {
    promoInput.addEventListener('input', () => {
      if (promoInput.value.length > 0) {
        promoButtonText.classList.add('submit__promo-button-text--js');
      } else {
        promoButtonText.classList.remove('submit__promo-button-text--js');
      }
    })
  }
}

export {addsButtonPromo};
