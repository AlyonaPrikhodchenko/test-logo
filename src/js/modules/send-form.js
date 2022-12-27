import {formSubmit} from "./util.js";
import {validationForm} from "./validation-form.js";

const sendForm = () => {
  formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    validationForm(formData);

    for (const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
  })
}

export {
  sendForm
};
