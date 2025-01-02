import { useNavigate } from 'react-router-dom';

const roadTo = (path: string, navigate: any, callback?: Function) => {
  navigate(path);
  if (callback) {
    callback();
  }
};

export default roadTo;
