import{changesTitle,formatNumber,productsCounts,productsList,productsPrice,submitButton,totalPrice,priceStocks,priceDiscounts,pricePromo,totalPriceAll,priceDelivery,getItemPrice}from"./util.js";const recoverTemplate=document.querySelector("#recover").content.querySelector(".card__recover"),restoresCard=()=>{const t=Array.from(productsList.children);if(t){let e=0,r=0;t.forEach((t=>{const c=recoverTemplate.cloneNode(!0),o=c.querySelector("#card-name"),a=c.querySelector(".card__recover-button"),i=c.querySelector(".card__recover-delete"),s=t.querySelector(".card__title"),d=t.querySelector(".card__delete"),u=t.querySelector(".card__content"),l=t.querySelector(".card__result-quantity-value");d&&d.addEventListener("click",(()=>{t.removeChild(u),productsCounts.dataset.count=Number(productsCounts.dataset.count)-Number(l.value),productsPrice.dataset.productsPrice=Number(productsPrice.dataset.productsPrice)-Number(l.dataset.totalPriceOld),changesTitle(productsCounts.dataset.count,productsPrice.dataset.productsPrice),"0"===productsCounts.dataset.count?(submitButton.disabled=!0,priceDelivery.dataset.priceDelivery="0",priceDelivery.textContent=formatNumber(priceDelivery.dataset.priceDelivery),pricePromo.dataset.pricePromo="0",pricePromo.textContent=formatNumber(pricePromo.dataset.pricePromo)):(submitButton.disabled=!1,priceDelivery.dataset.priceDelivery="200",priceDelivery.textContent=formatNumber(priceDelivery.dataset.priceDelivery),pricePromo.dataset.pricePromo="500",pricePromo.textContent=formatNumber(pricePromo.dataset.pricePromo)),totalPrice.dataset.total=Number(totalPrice.dataset.total)-Number(l.dataset.totalPriceOld),totalPrice.textContent=formatNumber(totalPrice.dataset.total),priceStocks.dataset.priceStocks=Number(priceStocks.dataset.priceStocks)-(Number(l.dataset.totalPriceOld)-Number(l.dataset.totalPrice)),priceStocks.textContent=formatNumber(priceStocks.dataset.priceStocks),priceDiscounts.dataset.priceDiscounts=Number(priceStocks.dataset.priceStocks)+Number(pricePromo.dataset.pricePromo),priceDiscounts.textContent=formatNumber(priceDiscounts.dataset.priceDiscounts),totalPriceAll.dataset.priceTotalAll=Number(totalPrice.dataset.total)+Number(priceDelivery.dataset.priceDelivery)-Number(priceDiscounts.dataset.priceDiscounts),totalPriceAll.textContent=formatNumber(totalPriceAll.dataset.priceTotalAll),o.textContent=o?s.textContent:"Наименование товара",t.appendChild(c)})),a&&a.addEventListener("click",(()=>{t.appendChild(u),t.removeChild(c),productsCounts.dataset.count=Number(productsCounts.dataset.count)+Number(l.value),productsPrice.dataset.productsPrice=Number(productsPrice.dataset.productsPrice)+Number(l.dataset.totalPriceOld),changesTitle(productsCounts.dataset.count,productsPrice.dataset.productsPrice),"0"===productsCounts.dataset.count?(submitButton.disabled=!0,priceDelivery.dataset.priceDelivery="0",priceDelivery.textContent=formatNumber(priceDelivery.dataset.priceDelivery),pricePromo.dataset.pricePromo="0",pricePromo.textContent=formatNumber(pricePromo.dataset.pricePromo)):(submitButton.disabled=!1,priceDelivery.dataset.priceDelivery="200",priceDelivery.textContent=formatNumber(priceDelivery.dataset.priceDelivery),pricePromo.dataset.pricePromo="500",pricePromo.textContent=formatNumber(pricePromo.dataset.pricePromo)),priceStocks.dataset.priceStocks=Number(priceStocks.dataset.priceStocks)+(Number(l.dataset.totalPriceOld)-Number(l.dataset.totalPrice)),priceStocks.textContent=formatNumber(priceStocks.dataset.priceStocks),priceDiscounts.dataset.priceDiscounts=Number(priceStocks.dataset.priceStocks)+Number(pricePromo.dataset.pricePromo),priceDiscounts.textContent=formatNumber(priceDiscounts.dataset.priceDiscounts),totalPrice.dataset.total=Number(totalPrice.dataset.total)+Number(l.dataset.totalPriceOld),totalPrice.textContent=formatNumber(totalPrice.dataset.total),totalPriceAll.dataset.priceTotalAll=Number(totalPrice.dataset.total)+Number(priceDelivery.dataset.priceDelivery)-Number(priceDiscounts.dataset.priceDiscounts),totalPriceAll.textContent=formatNumber(totalPriceAll.dataset.priceTotalAll)})),i&&i.addEventListener("click",(()=>{t.remove()})),e+=getItemPrice(l),r+=Number(l.value)})),productsCounts.dataset.count=r,productsPrice.dataset.productsPrice=e,changesTitle(productsCounts.dataset.count,productsPrice.dataset.productsPrice)}};export{restoresCard};