import { useEffect, useState } from 'react';
import { useGetClients } from './useGetClients';
import { useParams } from 'react-router-dom';

const columns = ['Name', 'Contact Info', 'Created At', 'Manage Client'];

function ClientsList() {
  const { id, sid } = useParams();
  const [clientlist, setClientList] = useState<getClientListType[]>([]);
  const [emptyData, setEmptyData] = useState(false);
  const param = {
    userId: id ? parseInt(id) : 0,
    serviceId: sid ? parseInt(sid) : 0,
  };
  const { isPending, isSuccess, data } = useGetClients(param);
  useEffect(() => {
    setClientList(data?.data.data);
    if (data?.data.data.length == 0) {
      setEmptyData(true);
    }
  });
  {
    if (isPending) {
      return <h1>Loading.....</h1>;
    }
  }
  {
    if (emptyData) {
      return <h1> client not found</h1>;
    }
  }
  return (
    <div>
      <div className="ralative overflow-x-auto shadow-md sm:rounded-lg mt-2 mx-3">
        <table className="w-full text-sm border-gray-800 text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((item) => (
                <th scope="col" className="px-6 py-3">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {clientlist.map((row) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {row.name}
                </th>

                <td className="px-6 py-4">{row.contactInfo}</td>
                <td className="px-6 py-4">{row.createdAt}</td>
                <td className="px-6 py-4">
                  <button>Edit</button>
                  <button>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClientsList;
