import React from 'react';
import SocialIcons from './icons/icons';
import './styles.scss';

const Footer = () => {
  return (
    <footer>
      <div className='about' id='about'>
        <div className='name-corp'>VYT</div>
        <div className='footer-information'>
          <div className='author-corp'>dev. by Alexey N.</div>
          <div className='footer-links'>
            <div>© 2024 Все права защищены.</div>
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
