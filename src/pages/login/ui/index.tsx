import React from 'react';
import './styles.scss';
import Navbar from '@/components/navbar/navbar';
import roadTo from '@/shared/route/route';
import { useNavigate } from 'react-router-dom';
import { paths } from '@/shared/consts/consts';
const LoginForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const email = event.target.email.value.trim();
    const password = event.target.pass.value;

    console.log('Email:', email);
    console.log('Password:', password);
  };
  const navigate = useNavigate();
  return (
    <div className='limiter'>
      <Navbar customClassName='login' />
      <div className='container-login'>
        <div className='wrap-login'>
          <div className='login-pic js-tilt' data-tilt>
            <img
              src='https://github.com/AlexeyBMSTU/shop/blob/firstWeek/src/static/photos/image5.jpeg?raw=true'
              alt='IMG'
            />
          </div>

          <form className='login-form validate-form' onSubmit={handleSubmit}>
            <span className='login-form-title'>Авторизация</span>

            <div
              className='wrap-input validate-input'
              data-validate='Valid email is required: ex@abc.xyz'
            >
              <input
                className='login__input-email'
                type='email'
                name='email'
                placeholder='Email'
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
                className='login__input-password'
                type='password'
                name='pass'
                placeholder='Password'
              />
              <span className='focus-input'></span>
              <span className='symbol-input'>
                <i className='fa fa-lock' aria-hidden='true'></i>
              </span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn' type='submit'>
                Войти
              </button>
            </div>

            <div className='text-center p-t-12'>
              <span className='txt1'>Забыли</span>
              <a className='txt2' href='#'>
                Имя / Пароль?
              </a>
            </div>

            <div className='text-center p-t-136'>
              <a
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  roadTo(paths.REGISTRATION_PAGE, navigate);
                }}
                className='txt2'
              >
                Создать аккаунт
                <i
                  className='fa fa-long-arrow-right m-l-5'
                  aria-hidden='true'
                ></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
