import React from 'react';
import './styles.scss';
import { paths, timeContentLoad } from '@/shared/consts/consts';
import roadTo from '@/shared/route/route';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ customClassName }: any) => {
  const navigate = useNavigate();

  const scrollToAbout = () => {
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView();
      }
    }, timeContentLoad);
  };

  return (
    <div className={'nav-welcome ' + customClassName}>
      <a
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          roadTo(paths.GENERAL_PAGE, navigate);
        }}
      >
        ГЛАВНАЯ
      </a>
      <a
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          roadTo(paths.GENERAL_PAGE, navigate, scrollToAbout);
        }}
      >
        О НАС
      </a>
      <a href='#'>СЕРВИС</a>
      <a href='#'>КОНТАКТЫ</a>
    </div>
  );
};

export default Navbar;
