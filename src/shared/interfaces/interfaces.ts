interface ApiMethod {
  method: 'GET' | 'POST' | 'DELETE';
  url: string;
  body?: any;
}

interface DocumentationServices {
  home: {
    getImages: ApiMethod;
  };
  auth: {
    login: ApiMethod;
    register: ApiMethod;
  };
  account: {
    get: ApiMethod;
  };
}

interface LoaderProps {
  isLoading: boolean;
  customStyle?: React.CSSProperties;
}
