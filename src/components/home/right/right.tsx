import React from 'react';
import snow from '@/static/photos/snow-welcome.jpg';
import './styles.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Right = () => {
  const navigate = useNavigate();

  const scrollToAbout = () => {
    navigate('/');
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView();
    }
  };
  return (
    <div className='right-welcome'>
      <div className='nav-welcome'>
        <a href='#'>ГЛАВНАЯ</a>
        <a onClick={scrollToAbout}>О НАС</a>
        <a href='#'>СЕРВИС</a>
        <a href='#'>КОНТАКТЫ</a>
      </div>
      <img
        className='snow__welcome'
        alt='Snowy mountain landscape'
        height='600'
        src={snow}
        width='800'
      />
    </div>
  );
};

export default Right;
