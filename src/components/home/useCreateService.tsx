import { createService as createServiceAPI } from '../../services/apiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

// export function useCreateService() {
//   const queryClient = useQueryClient();

//   const { mutate: createService, isPending } = useMutation({
//     mutationFn: createServiceAPI,
//     onSuccess: (newService) => {
//       console.log(newService);
//       queryClient.setQueryData(
//         ['services'],
//         (oldServices: createServiceType[]) => {
//           if (oldServices) {
//             return [...oldServices, newService];
//           } else {
//             return [newService];
//           }
//         }
//       );
//       toast.success('New Service Created');
//     },
//     onError: () => {
//       toast.error('Fail to create new service');
//     },
//   });
//   return { createService, isPending };
// }

export function useCreateService() {
  const queryClient = useQueryClient();

  const {
    mutate: createService,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: createServiceAPI,
    onSuccess: (newService) => {
      console.log(newService);

      // Append the new service to the existing list of services
      queryClient.setQueryData(
        ['services'],
        (oldServices: createServiceType[]) => {
          if (oldServices) {
            return [...oldServices, newService];
          } else {
            return [newService];
          }
        }
      );

      toast.success('New Service Created');
    },
    onError: () => {
      toast.error('Failed to create new service');
    },
  });

  return { createService, isPending, isSuccess };
}
