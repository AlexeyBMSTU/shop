const documentationServices: DocumentationServices = {
  home: {
    getImages: {
      method: 'GET',
      url: '/api/home/images',
    },
  },
  auth: {
    login: {
      method: 'POST',
      url: '/api/auth/login',
    },
    register: {
      method: 'POST',
      url: '/api/auth/register',
    },
  },
  account: {
    get: {
      method: 'GET',
      url: '/api/account/account',
    },
  },
};

const timeContentLoad = 400;

const paths = {
  GENERAL_PAGE: '/',
  LOGIN_PAGE: '/auth',
  REGISTRATION_PAGE: '/registration',
};
export { documentationServices, timeContentLoad, paths };
