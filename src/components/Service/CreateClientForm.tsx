import { FC, useEffect, useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import useCreateClient from './useCreateClient';
import { useGetClients } from './useGetClients';
import useUpdateClient from './useUpdateClient';

interface CreateClientFormProps {
  onClose: () => void;
  rowData?: updateClientType | null;
}

export const CreateClientForm: FC<CreateClientFormProps> = ({
  rowData = null,
  onClose,
}) => {
  const [editData, setEditData] = useState<updateClientType | null>(rowData);
  const [editSession, setEditSession] = useState<boolean>(false);
  const { id, sid } = useParams();
  const { CreatClient, isSuccess, isPending } = useCreateClient();
  const {
    UpdateClient,
    isSuccess: isSuccessUpdate,
    isPending: isPendingUpdate,
  } = useUpdateClient();

  useEffect(() => {
    if (rowData !== null) {
      setEditData(rowData);
      setEditSession(true);
    }
  }, [rowData]);

  const setRowData = () => {
    if (editData) {
      setValue('name', editData?.name);
      setValue('address', editData?.address);
      setValue('contactInfo', editData?.contactInfo);
    }
  };

  useEffect(() => {
    setRowData();
  }, [editData?.id]);

  const param = {
    userId: id ? parseInt(id) : 0,
    serviceId: sid ? parseInt(sid) : 0,
  };

  const { refetch } = useGetClients(param);

  const schema = yup.object({
    name: yup.string().required(),
    contactInfo: yup.string().max(10).required(),
    address: yup.string(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: {
    name: string;
    contactInfo: string;
    address?: string;
  }) => {
    if (editSession) {
      if (editData?.id) {
        const clientData: updateClientType = {
          ...data,
          clientId: editData.id,
          id: id ? parseInt(id) : 0,
        };
        UpdateClient(clientData);
      }
    } else {
      const clientData: createClientType = {
        ...data,
        userId: id ? parseInt(id) : 0,
        serviceId: sid ? parseInt(sid) : 0,
      };

      CreatClient(clientData);
    }
  };

  useEffect(() => {
    if (isSuccess || isSuccessUpdate) {
      reset();
      onClose();
      refetch();
    }
  }, [isSuccess, isSuccessUpdate, reset, onClose, refetch]);

  return (
    <>
      <p className="text-lg font-bold text-center mb-3">
        {editSession ? 'Update Client' : 'Create Client'}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 items-center gap-4">
          <label
            htmlFor="name"
            className="text-right text-gray-600 dark:text-gray-300"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            {...register('name')}
            className="col-span-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-gray-600"
          />
          {errors && (
            <div className="">
              <p className="col-span-4 text-right text-red-500 w-full text-xs italic">
                {errors.name?.message}
              </p>
            </div>
          )}
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label
            htmlFor="contactInfo"
            className="text-right text-gray-600 dark:text-gray-300"
          >
            Contact Info
          </label>
          <input
            id="contactInfo"
            type="text"
            placeholder="9995555999"
            {...register('contactInfo')}
            className="col-span-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-gray-600"
          />
          {errors && (
            <p className="text-red-500 text-xs italic">
              {errors.contactInfo?.message}
            </p>
          )}
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label
            htmlFor="address"
            className="text-right text-gray-600 dark:text-gray-300"
          >
            Address
          </label>
          <input
            id="address"
            type="textarea"
            placeholder="Address...."
            defaultValue={''}
            {...register('address')}
            className="col-span-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-gray-600"
          />
          {errors && (
            <p className="text-red-500 text-xs italic">
              {errors.address?.message}
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
            disabled={isPending || isPendingUpdate}
          >
            {!editSession && (!isPending ? 'Create Client' : 'creating...')}
            {editSession &&
              (!isPendingUpdate && editSession
                ? 'Update Client'
                : 'updating...')}
          </button>
        </div>
      </form>
    </>
  );
};
