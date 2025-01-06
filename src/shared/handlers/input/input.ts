const handleInput = () => {
  const errorPlace = document.querySelector(`.error-place`);
  if (errorPlace) {
    errorPlace.innerHTML = '';
  }
};

export default handleInput;
