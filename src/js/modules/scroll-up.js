const scrollsUp = () => {
  const scrollButton = document.querySelector('.arrow-up');

  if (scrollButton) {
    scrollButton.addEventListener('click', () => {
      window.scrollTo(0, 0);
    })
  }
}

export {scrollsUp};
