import { useQuery } from '@tanstack/react-query';
import { getClients as getClientsApi } from '../../services/apiClient';
// import toast from 'react-hot-toast';

export function useGetClients(id: getClientsType) {
  const { isPending, data, isSuccess } = useQuery({
    queryKey: ['client', id],
    queryFn: () => getClientsApi(id),
  });

  return { isPending, data, isSuccess };
}
