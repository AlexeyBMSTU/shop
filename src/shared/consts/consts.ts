const documentationServices: DocumentationServices = {
  home: {
    getImages: {
      method: 'GET',
      url: '/api/home/images',
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
