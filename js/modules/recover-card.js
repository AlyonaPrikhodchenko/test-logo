import{changesTitle,formatNumber,submitButton}from"./util.js";const recoverTemplate=document.querySelector("#recover").content.querySelector(".card__recover"),getItemPrice=t=>t.value*t.dataset.oldPrice,restoresCard=()=>{const t=document.querySelector(".products__list"),e=Array.from(t.children);if(e){let t=0,r=0,a=document.querySelector("#products-count"),o=document.querySelector("#products-price");e.forEach((e=>{const c=recoverTemplate.cloneNode(!0);let d=c.querySelector("#card-name"),s=e.querySelector(".card__title"),u=e.querySelector(".card__delete"),i=e.querySelector(".card__content"),m=c.querySelector(".card__recover-button"),l=c.querySelector(".card__recover-delete"),n=e.querySelector(".card__result-quantity-value"),p=document.querySelector("#total-price-items"),b=document.querySelector("#price-stocks"),N=document.querySelector("#price-discounts"),y=document.querySelector("#price-promo"),P=document.querySelector("#total-price"),v=document.querySelector("#price-delivery");u&&u.addEventListener("click",(()=>{e.removeChild(i),a.dataset.count=Number(a.dataset.count)-Number(n.value),o.dataset.productsPrice=Number(o.dataset.productsPrice)-Number(n.dataset.totalPriceOld),changesTitle(a.dataset.count,o.dataset.productsPrice),"0"===a.dataset.count?(submitButton.disabled=!0,v.dataset.priceDelivery="0",v.textContent=formatNumber(v.dataset.priceDelivery),y.dataset.pricePromo="0",y.textContent=formatNumber(y.dataset.pricePromo)):(submitButton.disabled=!1,v.dataset.priceDelivery="200",v.textContent=formatNumber(v.dataset.priceDelivery),y.dataset.pricePromo="500",y.textContent=formatNumber(y.dataset.pricePromo)),p.dataset.total=Number(p.dataset.total)-Number(n.dataset.totalPriceOld),p.textContent=formatNumber(p.dataset.total),b.dataset.priceStocks=Number(b.dataset.priceStocks)-(Number(n.dataset.totalPriceOld)-Number(n.dataset.totalPrice)),b.textContent=formatNumber(b.dataset.priceStocks),N.dataset.priceDiscounts=Number(b.dataset.priceStocks)+Number(y.dataset.pricePromo),N.textContent=formatNumber(N.dataset.priceDiscounts),P.dataset.priceTotalAll=Number(p.dataset.total)+Number(v.dataset.priceDelivery)-Number(N.dataset.priceDiscounts),P.textContent=formatNumber(P.dataset.priceTotalAll),d.textContent=d?s.textContent:"Наименование товара",e.appendChild(c)})),m&&m.addEventListener("click",(()=>{e.appendChild(i),e.removeChild(c),a.dataset.count=Number(a.dataset.count)+Number(n.value),o.dataset.productsPrice=Number(o.dataset.productsPrice)+Number(n.dataset.totalPriceOld),changesTitle(a.dataset.count,o.dataset.productsPrice),"0"===a.dataset.count?(submitButton.disabled=!0,v.dataset.priceDelivery="0",v.textContent=formatNumber(v.dataset.priceDelivery),y.dataset.pricePromo="0",y.textContent=formatNumber(y.dataset.pricePromo)):(submitButton.disabled=!1,v.dataset.priceDelivery="200",v.textContent=formatNumber(v.dataset.priceDelivery),y.dataset.pricePromo="500",y.textContent=formatNumber(y.dataset.pricePromo)),b.dataset.priceStocks=Number(b.dataset.priceStocks)+(Number(n.dataset.totalPriceOld)-Number(n.dataset.totalPrice)),b.textContent=formatNumber(b.dataset.priceStocks),N.dataset.priceDiscounts=Number(b.dataset.priceStocks)+Number(y.dataset.pricePromo),N.textContent=formatNumber(N.dataset.priceDiscounts),p.dataset.total=Number(p.dataset.total)+Number(n.dataset.totalPriceOld),p.textContent=formatNumber(p.dataset.total),P.dataset.priceTotalAll=Number(p.dataset.total)+Number(v.dataset.priceDelivery)-Number(N.dataset.priceDiscounts),P.textContent=formatNumber(P.dataset.priceTotalAll)})),l&&l.addEventListener("click",(()=>{e.remove()})),t+=getItemPrice(n),r+=Number(n.value)})),a.dataset.count=r,o.dataset.productsPrice=t,changesTitle(a.dataset.count,o.dataset.productsPrice)}};export{restoresCard};