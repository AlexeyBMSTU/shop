import React, { useEffect } from 'react';
import './styles.scss';
import Collage from '@/components/collage/collage';
import Modal from '@/components/modal/modal';

import Footer from '@/components/footer/footer';
import Left from '@/components/home/left/left';
import Right from '@/components/home/right/right';
import homeControl from '../modal/uiLogic';
import { useDispatch, useSelector } from 'react-redux';
import { exampleAction } from '@/store/reducers';

const Description = ({ openModal }: any) => {
  return (
    <div className='description-welcome'>
      <Collage openModal={openModal} />
    </div>
  );
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);
  const examples = useSelector((state: any) => state.example);
  const dispatch = useDispatch();

  const handleAction = () => {
    dispatch(exampleAction(+2));
  };
  return (
    <div style={{ width: '100%', height: '100%' }} onClick={clickSideArea}>
      <h1>{examples}</h1>
      <button onClick={handleAction}>Increment</button>
      {isModalOpen && <div className='dark-overlay' />}
      <div className='container-welcome'>
        <Left />
        <Right />
      </div>
      <div style={{ marginTop: '10px' }}></div>
      <Description openModal={openModal} />
      <Footer />
      {isModalOpen && (
        <Modal closeModal={closeModal} selectedImage={selectedImage} />
      )}
    </div>
  );
};

export default Home;
