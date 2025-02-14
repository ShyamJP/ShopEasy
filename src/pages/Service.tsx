import { PiPlus } from 'react-icons/pi';
import ClientsList from '../components/Service/ClientsList';
import { useCallback, useEffect, useState } from 'react';
import CreateClientModal from '../components/Service/CreateClientModal';
import DeleteClientModal from '../components/Service/DeleteClientModal';
import { useParams } from 'react-router-dom';
import { useAllServices } from '../components/home/useAllServices';
import ServiceHeader from '../components/Service/ServiceHeader';
import { useGetClients } from '../components/Service/useGetClients';
import useEscapeKey from '../hooks/useEscapeKey';

function Service() {
  const [service, setService] = useState<getServicesDataType>();
  const { id, sid } = useParams();
  const userId = id ? parseInt(id) : 0;
  const serviceId = sid ? parseInt(sid) : 0;
  const { data: serviceData, isPending } = useAllServices({
    id: userId,
  });
  const { data: clientData } = useGetClients({
    userId: userId,
    serviceId: serviceId,
  });

  const getService = () => {
    const service = serviceData?.find(
      (item: getServicesDataType) => item.id === serviceId
    );
    setService(service);
  };

  useEffect(() => {
    getService();
  }, [!isPending]);

  const [isCreateClientModalVisible, setIsCreateClientModalVisible] =
    useState(false);
  const [isDeleteClientModalVisible, setIsDeleteClientModalVisible] =
    useState(false);
  const [deleteData, setDeleteData] = useState<deleteClientDataType>();
  const [editData, setEditData] = useState<getClientListType | null>(null);
  const [query, setQuery] = useState('');

  const handleToggleModal = useCallback(() => {
    if (isCreateClientModalVisible) {
      setEditData(null);
    }
    setIsCreateClientModalVisible((prev) => !prev);
  }, [isCreateClientModalVisible]);

  const handleToggleDeleteModal = () => {
    setIsDeleteClientModalVisible(!isDeleteClientModalVisible);
  };

  const handleDelete = (data: deleteClientDataType) => {
    setDeleteData(data);
    handleToggleDeleteModal();
  };

  const handleEdit = (data: getClientListType) => {
    console.log(data);
    setEditData(data);
    handleToggleModal();
  };

  // useEffect(() => {
  //   console.log(query);
  // }, [query]);

  // Enable to close the Modal on Escape
  useEscapeKey(handleToggleDeleteModal, isDeleteClientModalVisible);
  useEscapeKey(handleToggleModal, isCreateClientModalVisible);

  return (
    <div className="dark:bg-black">
      {/* header of Service  - two sections vertical 
            1. Service name , price per unit , also make for update 
            2. total no. of clients 
            3. total profit of service per month
      */}
      <ServiceHeader service={service} clients={clientData?.data.data} />

      {/* Row -> search bar for client , filters , Add client button */}
      <section className="flex-wrap sm:flex jus sm:flex-nowrap mt-2 p-2 dark:text-gray-300  dark:bg-gray-800">
        <div className="sm:w-1/3 flex justify-center sm:justify-start">
          {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <span className="text-gray-500">
              <FaUsers />
            </span>
          </div> */}
          <h2 className="text-xl font-bold sm:text-2xl">Clients</h2>
        </div>
        <div className="sm:w-1/3 flex justify-center ">
          <button
            type="button"
            className="flex text-green-700 w-28 md:text-base text-sm h-10 sm:w-44  hover:text-white border border-green-700 hover:bg-green-700 focus:outline-none  font-bold rounded-lg  md:px-5 py-2 text-center me-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            onClick={handleToggleModal}
          >
            <span className="mt-1 mr-2 ml-2" title="Add client">
              <PiPlus />
            </span>{' '}
            <span>Add client</span>
          </button>
        </div>
        <div className="sm:w-1/3 flex justify-center sm:justify-end">
          <input
            type="text"
            id="simple-search"
            className="border border-gray-300 mr-5 text-gray-900 text-sm bg-slate-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-2/3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search client..."
            required
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </section>
      {/* List of clients  Table
        fields - name , contact info , createdAt , right Arrow for navigate
      */}
      <section className="w-full">
        <ClientsList
          onDelete={handleDelete}
          onEdit={handleEdit}
          searchQuery={query}
        />
      </section>

      {isCreateClientModalVisible && (
        <CreateClientModal
          isVisible={isCreateClientModalVisible}
          isClose={handleToggleModal}
          rowData={editData}
        />
      )}
      {isDeleteClientModalVisible && (
        <DeleteClientModal
          isVisible={isDeleteClientModalVisible}
          onClose={handleToggleDeleteModal}
          deleteData={deleteData}
        />
      )}
    </div>
  );
}

export default Service;
