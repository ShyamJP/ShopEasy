import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLogOut } from '../components/authentication/useLogOut';
import toast from 'react-hot-toast';

function AxiosIntercepter() {
  const navigate = useNavigate();
  const { logout } = useLogOut();
  console.log('Intercepter called');

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        toast.error('Invalid Token or Token is Expired');
        logout();
        navigate('/');
      }
      return Promise.reject(error);
    }
  );
}

export default AxiosIntercepter;
