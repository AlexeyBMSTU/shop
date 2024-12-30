import React from 'react';
import './styles.scss';

const Auth: React.FC = () => {
  return (
    <div>
      <div className='container-auth'>
        <div className='left-auth'>
          <img
            alt='Illustration of a person jumping with plants around'
            height='300'
            src='https://storage.googleapis.com/a1aa/image/kvA41UdoZE59HJSr5MVReTvqU8jnfCRbtOKR29YuJWneiHAoA.jpg'
            width='300'
          />
          <p>ОТКРЫВАЙ НОВЫЕ ВОЗМОЖНОСТИ ВМЕСТE С SHOP</p>
        </div>
        <div className='right-auth'>
          <h2>С возвращением!</h2>
          <form>
            <div className='input-group-auth'>
              <label>Имя</label>
              <input id='username-auth' name='username' type='text' />
            </div>
            <div className='input-group-auth'>
              <label>Пароль</label>
              <input id='password-auth' name='password' type='password' />
            </div>
            <button className='btn-auth' type='submit'>
              Войти
            </button>
            <div className='links-auth'>
              <a href='#'>Создать аккаунт</a>
              <a href='#'>Забыли пароль?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
