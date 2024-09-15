import { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCreateService } from './useCreateService';
import { useAllServices } from './useAllServices';
import { useParams } from 'react-router-dom';

interface CreateNewServiceModalProps {
  onClose: () => void;
}

export const CreateServiceForm: FC<CreateNewServiceModalProps> = ({
  onClose,
}) => {
  const schema = yup.object({
    serviceName: yup.string().required(),
    unit: yup.string().required(),
    pricePerUnit: yup.number().required().positive(),
  });
  const { id } = useParams();
  const { createService, isPending } = useCreateService();
  const { refetch } = useAllServices({ id });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: createServiceType) => {
    const uid = parseInt(id);
    data.userId = uid;

    createService(data);
    onClose();
    if (!isPending) refetch();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-4 items-center gap-4">
        <label
          htmlFor="name"
          className="text-right text-gray-600 dark:text-gray-300"
        >
          Service Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter service name"
          {...register('serviceName')}
          className="col-span-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-gray-600"
        />
        {errors && (
          <p className="text-red-500 text-xs italic">
            {errors.serviceName?.message}
          </p>
        )}
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label
          htmlFor="unit"
          className="text-right text-gray-600 dark:text-gray-300"
        >
          Service Unit
        </label>
        <input
          id="unit"
          type="text"
          placeholder="Enter service unit"
          {...register('unit')}
          className="col-span-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-gray-600"
        />
        {errors && (
          <p className="text-red-500 text-xs italic">{errors.unit?.message}</p>
        )}
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label
          htmlFor="price"
          className="text-right text-gray-600 dark:text-gray-300"
        >
          Price Per Unit
        </label>
        <input
          id="pricePerUnit"
          type="number"
          placeholder="Enter service price"
          {...register('pricePerUnit')}
          className="col-span-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-gray-600"
        />
        {errors && (
          <p className="text-red-500 text-xs italic">
            {errors.pricePerUnit?.message}
          </p>
        )}
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          className="inline-flex h-9 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex h-9 items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-400 dark:focus-visible:ring-green-500 disabled:pointer-events-none disabled:opacity-50"
          disabled={isPending}
        >
          Submit
          {!isPending ? 'Save Service' : 'Processing...'}
        </button>
      </div>
    </form>
  );
};
