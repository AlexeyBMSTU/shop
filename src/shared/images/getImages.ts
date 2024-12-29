import goToServer from '@/shared/axios/axios';
import documentationServices from '@/shared/consts/consts';

/**
 * Получение изображений
 * @returns
 */
const getImages = async () => {
  return await goToServer(
    {
      method: documentationServices.home.getImages.method,
      url: documentationServices.home.getImages.url,
    },
    (response: any) => {
      return response;
    },
  );
};

export default getImages;
