import { useQueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createClient as createClientAPI } from '../../services/apiClient';

function useCreateClient() {
  const queryClient = useQueryClient();

  const {
    mutate: CreatClient,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: createClientAPI,
    onSuccess: (newClient) => {
      console.log('New client Created', newClient);

      queryClient.setQueryData(['client'], (oldClient: createClientType[]) => {
        if (oldClient) {
          return [...oldClient, newClient];
        } else {
          return [newClient];
        }
      });
      toast.success('New Client Added');
    },
    onError: (error) => {
      console.log(error);
      toast.error('Failed to create New Client');
    },
  });
  return { CreatClient, isSuccess, isPending };
}

export default useCreateClient;
