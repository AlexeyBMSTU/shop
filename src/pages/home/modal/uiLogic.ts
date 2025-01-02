import { useState, MouseEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

export default homeControl;
