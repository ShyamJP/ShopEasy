import { MdModeEditOutline } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

const columns = ['Date', 'Price', 'Total', 'Unit', 'Manage Record'];
const RecordsList = [
  {
    id: 3,
    clientId: 6,
    serviceId: 3,
    date: '2024-08-03T13:22:59.778Z',
    units: 10,
    price: 0,
    totalPrice: 100,
    createdAt: '2024-08-04T05:02:50.329Z',
  },
  {
    id: 5,
    clientId: 6,
    serviceId: 9,
    date: '2024-08-03T13:22:59.778Z',
    units: 30,
    price: 0,
    totalPrice: 375,
    createdAt: '2024-08-04T05:30:26.653Z',
  },
  {
    id: 7,
    clientId: 6,
    serviceId: 9,
    date: '2024-09-03T13:22:59.778Z',
    units: 30,
    price: 0,
    totalPrice: 375,
    createdAt: '2024-08-04T05:31:55.138Z',
  },
  {
    id: 8,
    clientId: 6,
    serviceId: 9,
    date: '2024-09-04T13:22:59.778Z',
    units: 30,
    price: 0,
    totalPrice: 375,
    createdAt: '2024-08-04T05:32:32.904Z',
  },
  {
    id: 9,
    clientId: 6,
    serviceId: 9,
    date: '2024-08-06T00:00:00.000Z',
    units: 30,
    price: 0,
    totalPrice: 375,
    createdAt: '2024-08-06T09:08:49.661Z',
  },
  {
    id: 12,
    clientId: 6,
    serviceId: 9,
    date: '2024-10-06T00:00:00.000Z',
    units: 30,
    price: 0,
    totalPrice: 390,
    createdAt: '2024-08-06T09:12:11.014Z',
  },
  {
    id: 14,
    clientId: 6,
    serviceId: 9,
    date: '2024-11-06T00:00:00.000Z',
    units: 30,
    price: 0,
    totalPrice: 400,
    createdAt: '2024-08-06T09:13:12.869Z',
  },
];

const RecordList = () => {
  return (
    <div className="relative overflow-x-scroll md:overflow-x-auto shadow-md sm:rounded-lg mt-2 mb-20 mx-3">
      <table className="w-full text-sm overflow-x-scroll z-0 border-gray-800 text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-sm text-gray-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns?.map((item, index) => (
              <th scope="col" className="px-6 py-3" key={index}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {RecordsList?.map((row) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={row.id}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium uppercase text-gray-900 whitespace-nowrap dark:text-white"
              >
                {row.date}
              </th>
              <td className="px-6 py-4">{row.price}</td>
              {/* <td className="px-6 py-4">{row.price ? row.address : '---'}</td> */}
              <td className="px-6 py-4">{row.totalPrice}</td>
              <td className="px-6 py-4">{row.units}</td>
              <td className="px-6 py-4">
                <button
                  className="text-xl text-slate-500 mx-2 hover:bg-slate-200 rounded-full p-2"
                  // onClick={() => handleEdit(row)}
                  title="Edit"
                >
                  <MdModeEditOutline />
                </button>
                <button
                  className="text-xl text-red-500 mx-2 hover:bg-red-100 rounded-full p-2"
                  // onClick={() => handleDelete({ id: row.id, name: row.name })}
                  title="Delete"
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordList;
