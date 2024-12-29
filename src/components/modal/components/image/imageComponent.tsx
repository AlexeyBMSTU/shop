import React from "react";
import "./styles.scss";

const ImageComponent = ({ handleImageLoad, selectedImage, isLoading }: any) => {
  return (
    <div
      className="place__image"
      style={{ display: isLoading ? "none" : "flex" }}
    >
      <img
        onLoad={handleImageLoad}
        src={selectedImage}
        alt="Selected"
        className="modal__image"
      />
    </div>
  );
};

export default ImageComponent;
