const SHOW_TIME=4e3,successContainer=document.querySelector("#success").content.querySelector(".success"),errorContainer=document.querySelector("#error").content.querySelector(".error"),errorButton=errorContainer.querySelector(".error__button"),formSubmit=document.querySelector("#form-submit"),submitButton=formSubmit.querySelector("#submit-button"),blockSubmitButton=()=>{submitButton.disabled=!0,submitButton.textContent="Оформляю заказ..."},unblockSubmitButton=()=>{submitButton.disabled=!1,submitButton.textContent="Оформить заказ"},isEscapeKey=e=>"Escape"===e.key||"Esc"===e.key,onPopupEscKeydown=e=>{isEscapeKey(e)&&(e.preventDefault(),removePopup())},onPopupClick=()=>{removePopup()};function removePopup(){errorContainer.remove(),successContainer.remove(),document.removeEventListener("click",onPopupClick),document.removeEventListener("keydown",onPopupEscKeydown)}const showError=()=>{document.body.append(errorContainer),errorContainer.append(errorButton),errorButton.addEventListener("click",(()=>{errorContainer.remove()})),document.addEventListener("click",onPopupClick),document.addEventListener("keydown",onPopupEscKeydown),setTimeout((()=>{errorContainer.remove()}),4e3)},showSuccess=()=>{document.body.append(successContainer),document.addEventListener("click",onPopupClick),document.addEventListener("keydown",onPopupEscKeydown),setTimeout((()=>{successContainer.remove()}),4e3)},formatNumber=e=>{const o=String(e).split("");o.splice(-3,0," ");return o.join("")};export{showError,showSuccess,blockSubmitButton,unblockSubmitButton,formSubmit,formatNumber};