import {formSubmit} from "./util.js";
import {validationForm} from "./validation-form.js";

const sendForm = () => {
  formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    validationForm(e.target);
  })
}

export {
  sendForm
};
