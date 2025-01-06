import goToServer from '@/shared/axios/axios';
import { documentationServices } from '@/shared/consts/consts';

const login = async (body: any) => {
  return await goToServer(
    {
      method: documentationServices.auth.login.method,
      url: documentationServices.auth.login.url,
      body: body,
    },
    (response: any) => {
      return response;
    },
  );
};

export default login;
