import React, { useEffect, useState } from 'react';
import './styles.scss';
import getImages from '@/shared/images/getImages';
import Loader from '@/components/loader/loader';
import ImageComponent from '@/components/modal/components/image/imageComponent';

const Collage = ({ openModal }: any) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response: any = await getImages();
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    // <div className='container'>
    //   <div className='block_img'>
    //     {images.map((src, index) => (
    //       <div
    //         className={`img_box box${index + 1}`}
    //         key={index}
    //         onClick={() => openModal(src)}
    //       >
    //         <Loader isLoading={isLoading} />
    //         <ImageComponent
    //           handleImageLoad={handleImageLoad}
    //           selectedImage={src}
    //           isLoading={isLoading}
    //           customClassName='collage-images'
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className='initial'>
      {images.map((src, index) =>
        index === 5 ? (
          <div className='text-image6'>ЛУЧШИЕ ФОТОПЛЕНКИ</div>
        ) : (
          <div
            className={`image${index + 1}`}
            key={index}
            onClick={() => openModal('/images/src/static' + src)}
          >
            <Loader isLoading={isLoading} />
            <ImageComponent
              handleImageLoad={handleImageLoad}
              selectedImage={'/images/src/static' + src}
              isLoading={isLoading}
              customClassName='collage-images'
            />
          </div>
        ),
      )}

      {/* <img src={image2} className='image2'></img>
      <img src={image3} className='image3'></img>
      <img src={image4} className='image4'></img>
      <img src={image5} className='image5'></img>
      <img src={image6} className='image6'></img>
      <img src={image1} className='image7'></img> */}
    </div>
  );
};

export default Collage;

// <div className='image1'>
//   <img src={image1} ></img>
// </div>
// <div className='image2'>
//   <img src={image2}></img>
// </div>
// <div className='image3'>
//   <img src={image3} ></img>
// </div>
// <div className='image4'>
//   <img src={image4} ></img>
// </div>
// <div className='image5'>
//   <img src={image5} ></img>
// </div>
// <div className='text-image6'>
//   {/* <img src={image5} ></img> */}
//   ЛУЧШИЕ ФОТОПЛЕНКИ
// </div>
// <div className='image6'>
//   <img src={image6}></img>
// </div>
