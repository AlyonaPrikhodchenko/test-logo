import{contactsInputs,contactsPlaceholders,text}from"./util.js";const transfersPlaceholder=()=>{if(contactsInputs)for(let t=0;t<contactsInputs.length;t++){const s=contactsInputs[t];let c=contactsPlaceholders[t];s.addEventListener("input",(()=>{s.classList.add("contacts__input--active"),s.value.length>0?(c.classList.add("contacts__placeholder--hidden"),s.classList.contains("contacts__input--address")&&text.classList.add("contacts__button-text--js")):(c.classList.remove("contacts__placeholder--hidden"),s.classList.contains("contacts__input--address")&&text.classList.remove("contacts__button-text--js"))})),s.addEventListener("blur",(t=>{t.target.classList.remove("contacts__input--active")}))}};export{transfersPlaceholder};