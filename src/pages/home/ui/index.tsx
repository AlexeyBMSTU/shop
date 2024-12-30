import React, { useState, MouseEvent, useEffect } from 'react';
import './styles.scss';
import Navbar from '@/components/navbar/navbar';
import Collage from '@/components/collage/collage';
import { useNavigate } from 'react-router-dom';
import Modal from '@/components/modal/modal';

import snow from '@/static/photos/snow-welcome.jpg';

const Left = () => {
  return (
    <div className='left-welcome'>
      {/* <div className='logo'>
    </div> */}
      <div className='information-welcome'>
        <h1>
          {/* TRAVELOGUE */}
          Vlog Your Travel
        </h1>
        <h2>ВОСПОМИНАНИЯ В КАЖДОМ КАДРЕ</h2>
        <p>
          Делитесь яркими моментами из разных уголков мира, создавая свой личный
          тревел-влог. <br></br>
          Присоединяйтесь к нашему сообществу путешественников и делитесь своими
          впечатлениями с миром!
        </p>
        <a className='button-welcome' href='#'>
          ПРИСОЕДИНИТЬСЯ
        </a>
      </div>
      <div className='social-welcome'>
        <a href='#'>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a href='#'>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='#'>
          <i className='fab fa-instagram'></i>
        </a>
      </div>
    </div>
  );
};

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

const Description = ({ openModal }: any) => {
  return (
    <div className='description-welcome'>
      <Collage openModal={openModal} />
      <div className='information-description'>
        Делитесь моментами, которые вдохновляют!
      </div>
    </div>
  );
};
const homeControl = (): [
  (event: MouseEvent<HTMLDivElement>) => void,
  boolean,
  (imageSrc: string) => void,
  (event: MouseEvent<HTMLDivElement>) => void,
  () => void,
  string,
] => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsModalOpen(false);
    setSelectedImage('');
  };

  const clickSideArea = (event: MouseEvent<HTMLDivElement>) => {
    if (isModalOpen && !(event.target as Element).closest('.modal')) {
      setIsModalOpen(false);
      setSelectedImage('');
    }
  };

  const handleButtonClick = () => {
    navigate('/auth');
  };

  return [
    clickSideArea,
    isModalOpen,
    openModal,
    closeModal,
    handleButtonClick,
    selectedImage,
  ];
};

const Home: React.FC = () => {
  const [
    clickSideArea,
    isModalOpen,
    openModal,
    closeModal,
    handleButtonClick,
    selectedImage,
  ] = homeControl();
  useEffect(() => {
    if (isModalOpen) {
      // Запретить прокрутку
      document.body.style.overflow = 'hidden';
    } else {
      // Разрешить прокрутку
      document.body.style.overflow = 'auto';
    }

    // Очистка эффекта
    return () => {
      document.body.style.overflow = 'auto'; // Убедитесь, что прокрутка разрешена при размонтировании
    };
  }, [isModalOpen]);

  return (
    <div style={{ width: '100%', height: '100%' }} onClick={clickSideArea}>
      {isModalOpen && <div className='dark-overlay' />}
      <div className='container-welcome'>
        <Left />
        <Right />
      </div>
      <div style={{ marginTop: '10px' }}></div>
      <Description openModal={openModal} />
      {isModalOpen && (
        <Modal closeModal={closeModal} selectedImage={selectedImage} />
      )}
    </div>
  );
};

export default Home;
