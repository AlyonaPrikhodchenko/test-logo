import{formatNumber}from"./util.js";const getItemPrice=t=>t.value*t.dataset.price,initCounter=()=>{const t=document.querySelectorAll("[data-counters");if(t){let e=0,r=0,a=document.querySelector("#total-price-items"),u=document.querySelector("#products-price"),o=document.querySelector("#products-count");t.forEach((t=>{if(t){const n=t.querySelector(".card__result-button--plus"),l=t.querySelector(".card__result-button--minus");let c=t.querySelector("[data-total-price]"),d=t.querySelector("[data-total-price-old]"),i=t.querySelector(".card__result-quantity-value");i.value<=1&&(i.value=1,l.disabled=!0),n.addEventListener("click",(()=>{i.value++,c.textContent=formatNumber(i.value*i.dataset.price),a.textContent=Number(a.textContent)+Number(i.dataset.price),u.textContent=Number(a.textContent)+Number(i.dataset.price),o.textContent=Number(o.textContent)+Number(i.value),i.dataset.oldPrice&&(d.textContent=formatNumber(i.value*i.dataset.oldPrice)),i.value>1&&(l.disabled=!1)})),l.addEventListener("click",(()=>{i.value--,c.textContent=formatNumber(i.value*i.dataset.price),a.textContent=Number(a.textContent)-Number(i.dataset.price),u.textContent=Number(a.textContent)-Number(i.dataset.price),o.textContent=Number(o.textContent)-Number(i.value),i.dataset.oldPrice&&(d.textContent=formatNumber(i.value*i.dataset.oldPrice)),i.value<=1&&(i.value=1,l.disabled=!0)})),e+=getItemPrice(i),r+=Number(i.value)}})),a.textContent=e,u.textContent=e,o.textContent=r}};export{initCounter};