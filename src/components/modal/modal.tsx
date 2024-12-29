import React, { useState } from "react";
import "./styles.scss";
import Loader from "@/components/loader/loader";
import ImageComponent from "@/components/modal/components/image/imageComponent";
import Interactive from "@/components/modal/components/interactive/interactive";

const Modal = ({ closeModal, selectedImage }: any) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className="modal">
      <div className="modal__content">
        <Loader isLoading={isLoading} />
        <ImageComponent
          handleImageLoad={handleImageLoad}
          selectedImage={selectedImage}
          isLoading={isLoading}
        />
        <Interactive />
      </div>
      <div className="modal__close-button" onClick={closeModal}></div>
    </div>
  );
};

export default Modal;
