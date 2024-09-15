import { getServicesApi as serviceApi } from '../../services/apiService';
import { useQuery } from '@tanstack/react-query';

export function useAllServices(id: getServicesType) {
  const { isPending, data, error, refetch } = useQuery({
    queryKey: ['services', id],
    queryFn: () => serviceApi(id),
  });

  return { data, isPending, error, refetch };
}
