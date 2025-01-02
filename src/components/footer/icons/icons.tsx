import React, { useState } from 'react';
import {
  FaInstagram,
  FaVk,
  FaFacebookF,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';
import './styles.scss';

const SocialIcons = () => {
  const [activeIcon, setActiveIcon] = useState(''); // Хранит активную иконку

  return (
    <div className='social-welcome'>
      <a
        href='https://vk.com/leshka_055'
        onMouseEnter={() => setActiveIcon('vk')}
        onMouseLeave={() => setActiveIcon('')}
        className={`social-icon ${activeIcon === 'vk' ? 'active' : ''}`}
      >
        <FaVk size={30} />
      </a>
      <a
        href='https://www.instagram.com/leshka._'
        onMouseEnter={() => setActiveIcon('instagram')}
        onMouseLeave={() => setActiveIcon('')}
        className={`social-icon ${activeIcon === 'instagram' ? 'active' : ''}`}
      >
        <FaInstagram size={30} />
      </a>
      <a
        href='https://github.com/AlexeyBMSTU'
        onMouseEnter={() => setActiveIcon('github')}
        onMouseLeave={() => setActiveIcon('')}
        className={`social-icon ${activeIcon === 'github' ? 'active' : ''}`}
      >
        <FaGithub size={30} />
      </a>
    </div>
  );
};

export default SocialIcons;
