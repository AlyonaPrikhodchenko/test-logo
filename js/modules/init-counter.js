const getItemPrice=t=>t.value*t.dataset.price,initCounter=()=>{const t=document.querySelectorAll("[data-counters");if(t){let e=0,a=document.querySelector("#total-price-items");t.forEach((t=>{if(t){const r=t.querySelector(".card__result-button--plus"),l=t.querySelector(".card__result-button--minus");let n=t.querySelector("[data-total-price]"),u=t.querySelector("[data-total-price-old]"),o=t.querySelector(".card__result-quantity-value");o.value<=1&&(o.value=1,l.disabled=!0),r.addEventListener("click",(()=>{o.value++,n.textContent=String(o.value*o.dataset.price),a.textContent=Number(a.textContent)+Number(o.dataset.price),o.dataset.oldPrice&&(u.textContent=String(o.value*o.dataset.oldPrice)),o.value>1&&(l.disabled=!1)})),l.addEventListener("click",(()=>{o.value--,n.textContent=String(o.value*o.dataset.price),a.textContent=Number(a.textContent)-Number(o.dataset.price),o.dataset.oldPrice&&(u.textContent=String(o.value*o.dataset.oldPrice)),o.value<=1&&(o.value=1,l.disabled=!0)})),e+=getItemPrice(o)}})),a.textContent=e}};export{initCounter};