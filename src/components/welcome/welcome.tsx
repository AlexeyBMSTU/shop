import React, { useState, MouseEvent } from 'react';
import './styles.scss';
import Navbar from '@/components/navbar/navbar';
import Collage from '@/components/collage/collage';
import { useNavigate } from 'react-router-dom';
import Modal from '@/components/modal/modal';

const welcomeControl = (): [
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

const Welcome: React.FC = () => {
  const [
    clickSideArea,
    isModalOpen,
    openModal,
    closeModal,
    handleButtonClick,
    selectedImage,
  ] = welcomeControl();

  return (
    <div className='welcome' onClick={clickSideArea}>
      {isModalOpen && <div className='dark-overlay' />}
      <Navbar />
      <Collage openModal={openModal} />
      <form className='welcome__form'>
        <h1 className='welcome__message'>Поделись своими фотографиями!</h1>
        <button
          type='button'
          onClick={handleButtonClick}
          className='welcome__button welcome__button-state'
        >
          Вперед!
        </button>
      </form>

      {isModalOpen && (
        <Modal closeModal={closeModal} selectedImage={selectedImage} />
      )}
    </div>
  );
};

export default Welcome;
