const changesName = () => {
  let nameList = document.querySelector('.products__legend');
  let productsCounts = document.querySelector('#products-count');
  let productsPrice = document.querySelector('#products-price');

  const productsList = document.querySelector('.products__list');
  const cards = productsList.children;
  console.log(cards.length)
  productsCounts.textContent = cards.length;

  // console.log(nameList)
}

export {changesName};
