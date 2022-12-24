const countsLengthComment = () => {
  const commentTextarea = document.querySelector('#comment-textarea');
  const submitButton = document.querySelector('#submit-button');

  if (commentTextarea) {
    const counter = document.querySelector('.comment__counter');
    const commentBlock = document.querySelector('.comment')

    commentTextarea.addEventListener('input', () => {
      counter.textContent = commentTextarea.value.length;

      if (commentTextarea.value.length > 142) {
        commentBlock.classList.add('comment--warning');
        submitButton.disabled = true;
      } else {
        commentBlock.classList.remove('comment--warning');
        submitButton.disabled = false;
      }
    })
  }
}

export {countsLengthComment};
