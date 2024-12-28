import React, { useEffect, useState } from "react";
import "./styles.scss";
import getImages from "@/shared/images/getImages";

const Collage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response: any = await getImages();
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="container">
      <div className="block_img">
        {images.map((src, index) => (
          <div className={`img_box box${index + 1}`} key={index}>
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collage;
