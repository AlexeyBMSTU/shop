
interface ApiMethod {
    method: 'GET' | 'POST' | 'DELETE';
    url: string,
    body?: any
}

interface DocumentationServices {
    home: {
        getImages: ApiMethod,
    }
}

const documentationServices: DocumentationServices = {
    home:  {
        getImages: {
            method: 'GET',
            url: `/api/home/images`,
        }
    }
}

export default documentationServices

