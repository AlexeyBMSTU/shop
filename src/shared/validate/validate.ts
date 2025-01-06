const validate = (
  body: { username: string; password: string; passwordSec?: string },
  place: HTMLElement | null,
) => {
  let error: string = '';
  if (!body.username || !body.password) {
    error = 'Имя или пароль должны быть заполнены';
  }
  if (place) {
    place.textContent = error;
  }
};

export default validate;
