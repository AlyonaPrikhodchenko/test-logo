const mediaQuery = window.matchMedia('screen and (max-width: 767px)');

const initAccordion = (l) => {
  const buttons = document.querySelectorAll('.footer__links-button');
  const contentBlocks = document.querySelectorAll('.footer__links-content');

  if (mediaQuery.matches) {
    if (buttons) {
      for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];

        button.addEventListener('click', () => {
          if (parseInt(contentBlocks[i].style.height) != contentBlocks[i].scrollHeight) {
            contentBlocks[i].style.height = contentBlocks[i].scrollHeight + "px";
            button.classList.remove('footer__links-button--close');
          } else {
            contentBlocks[i].style.height = "0px";
            button.classList.add('footer__links-button--close');
          }

          for (let j = 0; j < contentBlocks.length; j++) {
            if (j !== i) {
              contentBlocks[j].style.height = "0px";
              buttons[j].classList.add('footer__links-button--close');
            }
          }
        });
      };
    }
  }
}

export {initAccordion, mediaQuery};
