import { useQueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateClient as updateClientApi } from '../../services/apiClient';

function useUpdateClient() {
  const queryClient = useQueryClient();

  const {
    mutate: UpdateClient,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: updateClientApi,
    onSuccess: (updatedClient) => {
      console.log(updatedClient);

      queryClient.invalidateQueries(['client']);
      toast.success('Client Updated');
    },
    onError: (error) => {
      console.log(error);
      toast.error('Failed To Update Client');
    },
  });

  return { UpdateClient, isPending, isSuccess };
}

export default useUpdateClient;
