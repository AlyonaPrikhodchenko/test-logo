let mediaQueries = window.matchMedia('(max-width: 767px)');

const opensBurgerMenu = (media) => {
  const headerBurger = document.querySelector('.header__burger');
  const navigation = document.querySelector('.navigation');
  const userWrapper = document.querySelector('.header__user-menu');
  const userMenu = document.querySelector('.user-menu');

  if (headerBurger) {
    if (media.matches) {
      navigation.append(userMenu);

      headerBurger.addEventListener('click', (e) => {
        navigation.classList.toggle('navigation--hidden');
        e.target.classList.toggle('header__burger--close')
      })
    } else {
      userWrapper.insertBefore(userMenu, userWrapper.firstChild);
      navigation.removeChild(userMenu);

      headerBurger.addEventListener('click', (e) => {
        navigation.classList.remove('navigation--hidden');
        e.target.classList.remove('header__burger--close')
      })
    }
  }
}

export {opensBurgerMenu, mediaQueries};
