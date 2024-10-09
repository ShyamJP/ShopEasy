import { FC } from 'react';
import UpdateClientForm from './UpdateClientForm';

interface UpdateClientModalType {
  isVisible: boolean;
  onClose: () => void;
  editData: getClientListType;
}

const UpdateClientModal: FC<UpdateClientModalType> = ({
  isVisible,
  onClose,
  editData,
}) => {
  return (
    <div>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto transition-opacity duration-300 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'} `}
      >
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={onClose}
        />
        <div
          className={`relative z-10 w-full max-w-[500px] rounded-lg bg-white dark:bg-gray-900 p-6 shadow-lg sm:p-8 transition-transform duration-300 ${
            isVisible ? 'scale-100' : 'scale-95'
          }`}
        >
          <UpdateClientForm rowData={editData} />
        </div>
      </div>
    </div>
  );
};

export default UpdateClientModal;
