import { useQuery } from '@tanstack/react-query';
import { serachClients } from '../../services/apiClient';

function useSearchClient(queryData: searchClientType) {
  const { data, isPending, isSuccess, refetch } = useQuery({
    queryKey: ['client', queryData],
    queryFn: () => serachClients(queryData),
  });

  return { data, isPending, isSuccess, refetch };
}
export default useSearchClient;
