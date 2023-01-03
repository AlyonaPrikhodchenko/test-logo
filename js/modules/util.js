const SHOW_TIME=4e3,contactsInputs=document.querySelectorAll(".contacts__input"),contactsPlaceholders=document.querySelectorAll(".contacts__placeholder"),text=document.querySelector(".contacts__button-text"),promoInput=document.querySelector(".submit__promo-input"),promoButtonText=document.querySelector(".submit__promo-button-text"),successContainer=document.querySelector("#success").content.querySelector(".success"),errorContainer=document.querySelector("#error").content.querySelector(".error"),errorButton=errorContainer.querySelector(".error__button"),formSubmit=document.querySelector("#form-submit"),submitButton=formSubmit.querySelector("#submit-button"),productsTitle=document.querySelector(".products__legend"),blockSubmitButton=()=>{submitButton.disabled=!0,submitButton.textContent="Оформляю заказ..."},unblockSubmitButton=()=>{submitButton.disabled=!1,submitButton.textContent="Оформить заказ"},isEscapeKey=t=>"Escape"===t.key||"Esc"===t.key,onPopupEscKeydown=t=>{isEscapeKey(t)&&(t.preventDefault(),removePopup())},onPopupClick=()=>{removePopup()};function removePopup(){errorContainer.remove(),successContainer.remove(),document.removeEventListener("click",onPopupClick),document.removeEventListener("keydown",onPopupEscKeydown)}const showError=()=>{document.body.append(errorContainer),errorContainer.append(errorButton),errorButton.addEventListener("click",(()=>{errorContainer.remove()})),document.addEventListener("click",onPopupClick),document.addEventListener("keydown",onPopupEscKeydown),setTimeout((()=>{errorContainer.remove()}),4e3)},showSuccess=()=>{document.body.append(successContainer),document.addEventListener("click",onPopupClick),document.addEventListener("keydown",onPopupEscKeydown),setTimeout((()=>{successContainer.remove()}),4e3)},formatNumber=t=>{const e=String(t).split("");e.splice(-3,0," ");return e.join("")},changesTitle=(t,e)=>{t<="0"?productsTitle.innerHTML="Ваша корзина пуста":"1"===t?productsTitle.innerHTML=`<span class="products__count" id="products-count" data-count="${t}">${t}</span> товар на сумму <span class="products__price" id="products-price" data-products-price="${e}">${formatNumber(e)}</span>&nbsp;₽`:t>"1"&&t<"5"?productsTitle.innerHTML=`<span class="products__count" id="products-count" data-count="${t}">${t}</span> товара на сумму <span class="products__price" id="products-price" data-products-price=${e}>${formatNumber(e)}</span>&nbsp;₽`:t>="5"&&(productsTitle.innerHTML=`<span class="products__count" id="products-count" data-count="${t}">${t}</span> товаров на сумму <span class="products__price" id="products-price" data-products-price=${e}>${formatNumber(e)}</span>&nbsp;₽`)};export{showError,showSuccess,blockSubmitButton,unblockSubmitButton,formSubmit,formatNumber,contactsInputs,contactsPlaceholders,text,promoInput,promoButtonText,changesTitle,submitButton};