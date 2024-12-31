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
    <div className='initial'>
      {images.map((src, index) =>
        index === 5 ? (
          <div key={'text-image6'} className='text-image6'>
            ТВОИ ФОТОПЛЕНКИ МОГУТ БЫТЬ ТУТ
          </div>
        ) : (
          <div
            key={src}
            className={`image${index + 1}`}
            onClick={() => openModal(src)}
          >
            <Loader isLoading={isLoading} />
            <ImageComponent
              handleImageLoad={handleImageLoad}
              selectedImage={src}
              isLoading={isLoading}
              customClassName='collage-images'
            />
          </div>
        ),
      )}
    </div>
  );
};

export default Collage;
