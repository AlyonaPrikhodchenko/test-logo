import{contactsInputs,contactsPlaceholders,formSubmit,text}from"./util.js";const resetForm=()=>{if(contactsInputs)for(let t=0;t<contactsInputs.length;t++){const s=contactsInputs[t];contactsPlaceholders[t].classList.remove("contacts__placeholder--hidden"),s.classList.contains("contacts__input--address")&&text.classList.remove("contacts__button-text--js")}formSubmit.reset()};export{resetForm};