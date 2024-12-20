import { useQuery } from '@tanstack/react-query';
import { getClient as getClietnApi } from '../../services/apiClient';

function useGetClient(param: getClientType) {
  const { data, isPending, isSuccess, refetch } = useQuery({
    queryKey: ['client', param],
    queryFn: () => getClietnApi(param),
  });
  return { data, isPending, isSuccess, refetch };
}

export default useGetClient;
