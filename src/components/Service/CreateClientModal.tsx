import { FC } from 'react';
import { CreateClientForm } from './CreateClientForm';

interface CreateClientModalProps {
  isVisible: boolean;
  isClose: () => void;
  rowData?: updateClientType | null;
}

const CreateClientModal: FC<CreateClientModalProps> = ({
  isVisible,
  isClose,
  rowData,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto transition-opacity duration-300 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'} `}
    >
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={isClose}
      />
      <div
        className={`relative z-10 w-full max-w-[500px] rounded-lg bg-white dark:bg-gray-900 p-6 shadow-lg sm:p-8 transition-transform duration-300 ${
          isVisible ? 'scale-100' : 'scale-95'
        }`}
      >
        <CreateClientForm onClose={isClose} rowData={rowData} />
      </div>
    </div>
  );
};

export default CreateClientModal;
