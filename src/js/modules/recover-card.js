const recoverTemplate = document.querySelector('#recover').content.querySelector('.card__recover');

const restoresCard = () => {

  // let nameList = document.querySelector('.products__legend');
  // let productsCounts = document.querySelector('#products-count');
  // let productsPrice = document.querySelector('#products-price');
  // const cards = document.querySelectorAll('.card');

  const productsList = document.querySelector('.products__list');
  const cards = Array.from(productsList.children);
  // productsCounts.textContent = cards.length;

  if (cards) {
    cards.forEach(card => {
      const recoverElement = recoverTemplate.cloneNode(true);
      let cardName = recoverElement.querySelector('#card-name');

      let cardTitle = card.querySelector('.card__title');
      let deleteButton = card.querySelector('.card__delete');
      let cardContent = card.querySelector('.card__content');
      let recoverButton = recoverElement.querySelector('.card__recover-button');
      let deleteForeverButton = recoverElement.querySelector('.card__recover-delete');

      if (deleteButton) {
        deleteButton.addEventListener('click', () => {
          card.removeChild(cardContent);
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
