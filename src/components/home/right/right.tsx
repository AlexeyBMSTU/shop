import React from 'react';
import snow from '@/static/photos/snow-welcome.jpg';
import './styles.scss';

const Right = () => {
  return (
    <div className='right-welcome'>
      <div className='nav-welcome'>
        <a href='#'>HOME</a>
        <a href='#'>ABOUT US</a>
        <a href='#'>SERVICES</a>
        <a href='#'>CONTACT US</a>
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
