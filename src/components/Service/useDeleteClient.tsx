import { useQueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { delteClient as deleteClientAPI } from '../../services/apiClient';

export const useDeleteClient = () => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteClient,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: deleteClientAPI,
    onSuccess: (data) => {
      console.log('client deleted', data);

      queryClient.invalidateQueries(['client']);
      toast.success('Client Deleted');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { deleteClient, isPending, isSuccess };
};
