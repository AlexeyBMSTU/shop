interface ApiMethod {
  method: "GET" | "POST" | "DELETE";
  url: string;
  body?: any;
}

interface DocumentationServices {
  home: {
    getImages: ApiMethod;
  };
}
