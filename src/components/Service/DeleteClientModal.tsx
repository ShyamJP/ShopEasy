import { FC, useEffect } from 'react';
import { useDeleteClient } from './useDeleteClient';
import Spinner from '../ui/Spinner';

interface DeleteClientModalType {
  isVisible: boolean;
  onClose: () => void;
  deleteData: deleteClientDataType | undefined;
}
const DeleteClientModal: FC<DeleteClientModalType> = ({
  isVisible,
  onClose,
  deleteData,
}) => {
  const { isPending, isSuccess, deleteClient } = useDeleteClient();

  const delteClient = () => {
    const params = {
      id: deleteData.id,
    };
    deleteClient(params);
  };

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto transition-opacity duration-300 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
    >
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <div
        className={`relative z-10 w-full max-w-[350px] rounded-lg bg-white dark:bg-gray-900 pb-6 shadow-lg sm:p-8 transition-transform duration-300  ${isVisible ? 'scale-100' : 'scale-95'}`}
      >
        <div className="text-center">
          <p className="text-lg font-bold">Delete Client</p>
          <p className="m-3">Delete Client : {deleteData.name}</p>
          <p className="m-3">Client id : {deleteData.id}</p>
          <div className="grid grid-cols-2 mx-5 gap-14">
            <button
              type="button"
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="inline-flex h-9 items-center justify-center rounded-md border border-red-300 dark:border-red-700 bg-red-600 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-white dark:text-gray-300 shadow-sm transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
              onClick={delteClient}
              disabled={isPending}
            >
              {isPending ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteClientModal;
