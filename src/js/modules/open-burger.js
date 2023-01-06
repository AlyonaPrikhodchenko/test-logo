const mediaQueries = window.matchMedia('(max-width: 767px)');
const headerBurger = document.querySelector('.header__burger');
const navigation = document.querySelector('.navigation');
const userWrapper = document.querySelector('.header__user-menu');
const userMenu = document.querySelector('.user-menu');

const opensBurgerMenu = (media) => {
  if (headerBurger) {
    navigation.append(userMenu);
    headerBurger.addEventListener('click', (e) => {
      navigation.classList.toggle('navigation--hidden');
      userMenu.classList.toggle('user-menu--hidden');
      e.target.classList.toggle('header__burger--close');
    })

    if (!media.matches) {
      userWrapper.insertBefore(userMenu, userWrapper.firstChild);
      navigation.classList.remove('navigation--hidden');
      headerBurger.classList.remove('header__burger--close');
      userMenu.classList.remove('user-menu--hidden');
    }
  }
}


export {
  opensBurgerMenu,
  mediaQueries
};
