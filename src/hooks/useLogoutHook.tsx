import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: logout,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.clear();
      console.log('User logged out');
      navigate('/login');
      window.localStorage.setItem('loggedIn', '');
    },
    onError: (err) => {
      console.log('Error during logout: ', err);
    },
  });

  return { logout, isPending, isSuccess };
}
