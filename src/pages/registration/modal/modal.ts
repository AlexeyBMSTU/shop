import goToServer from '@/shared/axios/axios';
import { documentationServices } from '@/shared/consts/consts';

const registration = async (body: any) => {
  return await goToServer(
    {
      method: documentationServices.auth.register.method,
      url: documentationServices.auth.register.url,
      body: body,
    },
    (response: any) => {
      return response;
    },
  );
};

export default registration;
