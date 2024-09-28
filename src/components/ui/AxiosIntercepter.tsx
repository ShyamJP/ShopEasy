import axios from 'axios';
import { useLogOut } from '../authentication/useLogOut';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function AxiosIntercepter() {
  // const navigate = useNavigate();
  const { logout } = useLogOut();
  console.log('Intercepter called');

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        // toast.error('Invalid Token or Token is Expired');
        logout();
        // navigate('/');
      }
      return Promise.reject(error);
    }
  );
}

export default AxiosIntercepter;
