import React, { useState, MouseEvent } from 'react';
import './styles.scss';
import Navbar from '@/components/navbar/navbar';
import Collage from '@/components/collage/collage';
import { useNavigate } from 'react-router-dom';
import Modal from '@/components/modal/modal';

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

  return (
    <div className='home' onClick={clickSideArea}>
      {isModalOpen && <div className='dark-overlay' />}
      <Navbar />
      <Collage openModal={openModal} />
      <form className='home__form'>
        <h1 className='home__message'>Поделись своими фотографиями!</h1>
        <button
          type='button'
          onClick={handleButtonClick}
          className='home__button home__button-state'
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

export default Home;
