import goToServer from "../axios/axios";
import documentationServices from "../consts/consts";

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
