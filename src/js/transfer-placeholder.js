const transfersPlaceholder = () => {
  const contactsInputs = document.querySelectorAll('.contacts__input');
  const contactsPlaceholders = document.querySelectorAll('.contacts__placeholder');

  if (contactsInputs) {

    for (let i = 0; i < contactsInputs.length; i++) {
      const input = contactsInputs[i];
      let placeholder = contactsPlaceholders[i];

      input.addEventListener('input', () => {
        if (input.value.length > 0) {
          placeholder.classList.add('contacts__placeholder--hidden');
        } else {
          placeholder.classList.remove('contacts__placeholder--hidden');
        }
      })
    }
  }
}

export {transfersPlaceholder};
