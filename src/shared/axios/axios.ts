import axios from "axios";

const goToServer = async (
  objectArgs: { method: string; url: string; body?: any },
  callback: Function,
) => {
  switch (objectArgs.method) {
    case "GET": {
      return axios
        .get(objectArgs.url)
        .then((response: any) => {
          return callback(response);
        })
        .catch((error: any) => {
            throw new Error(`Axios error! - ${error}`);
        });
    }
    case "POST": {
        return axios
          .post(objectArgs.url, objectArgs.body)
          .then((response: any) => {
            return callback(response);
          })
          .catch((error: any) => {
            throw new Error(`Axios error! - ${error}`);
          });
      }
      default: {
        throw new Error(`Method not implemented!`);
      }
  }
};

export default goToServer;
