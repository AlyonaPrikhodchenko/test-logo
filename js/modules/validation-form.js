import{sendsSuccess}from"./send-success.js";import{formSubmit}from"./util.js";let validation=new window.JustValidate("#form-submit");const validationForm=()=>{let e=document.querySelector("#phone");new Inputmask("+7(999)999-99-99").mask(e),validation.addField("#name",[{rule:"required",errorMessage:"Поле обязательно к заполнению"},{rule:"minLength",value:2,errorMessage:"Минимум 2 символа"}]).addField("#second-name",[{rule:"required",errorMessage:"Поле обязательно к заполнению"},{rule:"minLength",value:2,errorMessage:"Минимум 2 символа"}]).addField("#phone",[{rule:"required",errorMessage:"Поле обязательно к заполнению"},{validator:r=>{const s=e.inputmask.unmaskedvalue();return Boolean(Number(s)&&10===s.length)},errorMessage:"Введите телефон полностью"}]).addField("#email",[{rule:"required",errorMessage:"Поле обязательно к заполнению"},{rule:"email",errorMessage:"Введите валидный адрес почты"}]).addField("#address",[{rule:"required",errorMessage:"Поле обязательно к заполнению"}]).addField("#promo",[{rule:"maxLength",value:7,errorMessage:"Максимум 7 символов"}]).onSuccess((()=>{const e=new FormData(formSubmit);sendsSuccess(e);for(const r of e.entries())console.log(`${r[0]}, ${r[1]}`)}))};export{validationForm,validation};