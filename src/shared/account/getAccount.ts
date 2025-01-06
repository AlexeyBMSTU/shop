import goToServer from '@/shared/axios/axios';
import { documentationServices } from '@/shared/consts/consts';

/**
 * Получение изображений
 * @returns
 */
const getAccount = async () => {
  return await goToServer(
    {
      method: documentationServices.account.get.method,
      url: documentationServices.account.get.url,
    },
    (response: any) => {
      return response;
    },
  );
};

export default getAccount;
