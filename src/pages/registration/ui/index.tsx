import React from 'react';
import './styles.scss';
import Navbar from '@/components/navbar/navbar';
import roadTo from '@/shared/route/route';
import { useNavigate } from 'react-router-dom';
import { paths } from '@/shared/consts/consts';
import registration from '../modal/modal';
import handleInput from '@/shared/handlers/input/input';
import validate from '@/shared/validate/validate';

const RegistrationForm = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const username = event.target.username.value.trim();
    const password = event.target.pass.value;
    validate({ username, password }, document.querySelector(`.error-place`));

    try {
      const response: any = await registration({ username, password });
      alert('register!');
    } catch (error) {
      console.error('Error fetching in register!', error);
    }
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const navigate = useNavigate();

  return (
    <div className='limiter'>
      <Navbar customClassName='register' />
      <div className='container-register'>
        <div className='wrap-register'>
          <div className='register-pic js-tilt' data-tilt>
            <img
              src='https://github.com/AlexeyBMSTU/shop/blob/firstWeek/src/static/photos/image5.jpeg?raw=true'
              alt='IMG'
            />
          </div>

          <form className='register-form validate-form' onSubmit={handleSubmit}>
            <span className='register-form-title'>Регистрация</span>

            <div className='wrap-input validate-input'>
              <input
                className='register__input-username'
                type='text'
                name='username'
                placeholder='Имя'
                onInput={handleInput}
              />
              <span className='focus-input'></span>
              <span className='symbol-input'>
                <i className='fa fa-envelope' aria-hidden='true'></i>
              </span>
            </div>

            <div
              className='wrap-input validate-input'
              data-validate='Password is required'
            >
              <input
                className='register__input-password'
                type='password'
                name='pass'
                placeholder='Password'
                onInput={handleInput}
              />
              <span className='focus-input'></span>
              <span className='symbol-input'>
                <i className='fa fa-lock' aria-hidden='true'></i>
              </span>
            </div>
            <div className='error-place'></div>
            <div className='container-register-form-btn'>
              <button className='register-form-btn' type='submit'>
                Создать аккаунт
              </button>
            </div>

            <div className='text-center p-t-12'>
              <span className='txt1'>У вас есть аккаунт?</span>
              <a
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  roadTo(paths.LOGIN_PAGE, navigate);
                }}
                className='txt2'
                href='#'
              >
                Войти
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegistrationForm;
