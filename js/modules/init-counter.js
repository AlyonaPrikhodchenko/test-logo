import{formatNumber}from"./util.js";const getItemPrice=t=>t.value*t.dataset.oldPrice,initCounter=()=>{const t=document.querySelectorAll("[data-counters");if(t){let e=0,a=0,r=0,o=document.querySelector("#total-price-items"),c=document.querySelector("#total-price"),s=document.querySelector("#price-delivery"),u=document.querySelector("#price-stocks"),d=document.querySelector("#price-discounts"),i=document.querySelector("#price-promo"),l=document.querySelector("#products-price"),n=document.querySelector("#products-count");t.forEach((t=>{const m=t.querySelector(".card__result-button--plus"),b=t.querySelector(".card__result-button--minus");let p=t.querySelector("[data-text-new]"),N=t.querySelector("[data-text-old]"),P=t.querySelector(".card__result-quantity-value");const S=()=>{P.dataset.totalPrice=P.value*P.dataset.price,P.dataset.totalPriceOld=P.value*P.dataset.oldPrice},x=()=>{c.dataset.priceTotalAll=Number(o.dataset.total)+Number(s.dataset.priceDelivery)-Number(d.dataset.priceDiscounts),c.textContent=formatNumber(c.dataset.priceTotalAll)},C=()=>{d.dataset.priceDiscounts=Number(u.dataset.priceStocks)+Number(i.dataset.pricePromo),d.textContent=formatNumber(d.dataset.priceDiscounts)},f=()=>N.textContent=formatNumber(P.dataset.totalPriceOld),y=()=>p.textContent=formatNumber(P.dataset.totalPrice),q=()=>{P.value<=1?(P.value=1,b.disabled=!0):b.disabled=!1};t&&(q(),m.addEventListener("click",(()=>{P.value++,S(),u.dataset.priceStocks=Number(u.dataset.priceStocks)+Number(P.dataset.oldPrice)-Number(P.dataset.price),u.textContent=formatNumber(u.dataset.priceStocks),N&&f(),y(),o.dataset.total=Number(o.dataset.total)+Number(P.dataset.oldPrice),o.textContent=formatNumber(o.dataset.total),C(),x(),n.dataset.count=Number(n.dataset.count)+1,n.textContent=n.dataset.count,l.dataset.productsPrice=Number(l.dataset.productsPrice)+Number(P.dataset.oldPrice),l.textContent=formatNumber(l.dataset.productsPrice),q()})),b.addEventListener("click",(()=>{P.value--,S(),u.dataset.priceStocks=Number(u.dataset.priceStocks)-(Number(P.dataset.oldPrice)-Number(P.dataset.price)),u.textContent=formatNumber(u.dataset.priceStocks),N&&f(),y(),o.dataset.total=Number(o.dataset.total)-Number(P.dataset.oldPrice),o.textContent=formatNumber(o.dataset.total),C(),x(),n.dataset.count=Number(n.dataset.count)-1,n.textContent=n.dataset.count,l.dataset.productsPrice=Number(l.dataset.productsPrice)-Number(P.dataset.oldPrice),l.textContent=formatNumber(l.dataset.productsPrice),q()})),p.textContent=formatNumber(P.dataset.totalPrice),e+=getItemPrice(P),r+=Number(P.value),a+=Number(P.dataset.totalPriceOld)-Number(P.dataset.totalPrice))})),o.dataset.total=e,o.textContent=formatNumber(o.dataset.total),c.dataset.priceTotalAll=Number(o.dataset.total)+Number(s.dataset.priceDelivery)-Number(d.dataset.priceDiscounts),c.textContent=formatNumber(c.dataset.priceTotalAll),u.dataset.priceStocks=a,u.textContent=a,d.dataset.priceDiscounts=Number(u.dataset.priceStocks)+Number(i.dataset.pricePromo),d.textContent=formatNumber(d.dataset.priceDiscounts),n.dataset.count=r,n.textContent=r,l.dataset.productsPrice=e,l.textContent=formatNumber(l.dataset.productsPrice)}};export{initCounter};