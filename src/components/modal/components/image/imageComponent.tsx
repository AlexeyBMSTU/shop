import React from 'react';
import './styles.scss';

const ImageComponent = ({
  handleImageLoad,
  selectedImage,
  isLoading,
  customClassNamePlaceIMG,
  customClassNameIMG,
}: any) => {
  return (
    <div
      className={'place__image ' + customClassNamePlaceIMG}
      style={{ display: isLoading ? 'none' : 'flex' }}
    >
      <img
        onLoad={handleImageLoad}
        src={selectedImage}
        alt='Selected'
        className={'modal__image ' + customClassNameIMG}
      />
    </div>
  );
};

export default ImageComponent;
