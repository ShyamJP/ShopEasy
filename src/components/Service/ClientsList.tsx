import { FC, useEffect, useState } from 'react';
import { useGetClients } from './useGetClients';
import { useParams } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { MdModeEditOutline } from 'react-icons/md';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Spinner from '../ui/Spinner';

const columns = ['Name', 'Contact Info', 'Created At', 'Manage Client'];

interface ClientListType {
  onDelete: (data: deleteClientDataType) => void;
  onEdit: (data: getClientListType) => void;
}

const ClientsList: FC<ClientListType> = ({ onDelete, onEdit }) => {
  const { id, sid } = useParams();
  const [clientlist, setClientList] = useState<getClientListType[]>([]);
  const [emptyData, setEmptyData] = useState(false);
  const param = {
    userId: id ? parseInt(id) : 0,
    serviceId: sid ? parseInt(sid) : 0,
  };
  const { isPending, data } = useGetClients(param);

  const handleDelete = (data: deleteClientDataType) => {
    onDelete(data);
  };

  const handleEdit = (data: getClientListType) => {
    onEdit(data);
  };

  useEffect(() => {
    setClientList(data?.data.data);
    if (data?.data.data.length == 0) {
      setEmptyData(true);
    }
  });
  {
    if (isPending) {
      return (
        <h1>
          <Spinner />
        </h1>
      );
    }
  }
  {
    if (emptyData) {
      return <h1>No Clients Available</h1>;
    }
  }
  return (
    <div className="ralative overflow-x-scroll md:overflow-x-auto shadow-md sm:rounded-lg mt-2 mx-3">
      <table className="w-full text-sm border-gray-800 text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-sm text-gray-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns?.map((item) => (
              <th scope="col" className="px-6 py-3">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {clientlist?.map((row) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={row.id}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium uppercase text-gray-900 whitespace-nowrap dark:text-white"
              >
                {row.name}
              </th>
              <td className="px-6 py-4">{row.contactInfo}</td>
              <td className="px-6 py-4">{row.createdAt}</td>
              <td className="px-6 py-4">
                <button
                  className="text-xl mx-2"
                  onClick={() => handleEdit(row)}
                  title="Edit"
                >
                  <MdModeEditOutline />
                </button>
                <button
                  className="text-xl text-red-500 mx-2 hover:bg-red-100 rounded-full p-2"
                  onClick={() => handleDelete({ id: row.id, name: row.name })}
                  title="Delete"
                >
                  <MdDelete />
                </button>
                <button
                  className="text-xl mx-2 hover:translate-x-2 duration-300"
                  title="View"
                >
                  <FaAngleDoubleRight />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsList;
