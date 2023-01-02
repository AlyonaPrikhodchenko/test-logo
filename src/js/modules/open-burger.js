let mediaQueries = window.matchMedia('(max-width: 767px)');

const opensBurgerMenu = (media) => {
  const headerBurger = document.querySelector('.header__burger');
  const navigation = document.querySelector('.navigation');
  const userWrapper = document.querySelector('.header__user-menu');
  const userMenu = document.querySelector('.user-menu');

  if (headerBurger && navigation) {
    if (media.matches) {
      navigation.append(userMenu);

      headerBurger.addEventListener('click', (e) => {
        navigation.classList.toggle('navigation--hidden');
        userMenu.classList.toggle('user-menu--hidden');
        e.target.classList.toggle('header__burger--close')
      })
    } else {
      userWrapper.insertBefore(userMenu, userWrapper.firstChild);

      headerBurger.addEventListener('click', (e) => {
        navigation.classList.remove('navigation--hidden');
        userMenu.classList.remove('user-menu--hidden');
        e.target.classList.remove('header__burger--close')
      })
    }
  }
}

export {
  opensBurgerMenu,
  mediaQueries
};
