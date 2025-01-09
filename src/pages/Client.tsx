import { useParams } from 'react-router-dom';
import useGetClient from '../components/Client/useGetClient';
import { getMonth } from '../utils/Date';
import RecordList from '../components/Client/RecordList';

function Client() {
  const { sid, id, cid } = useParams();
  const params = {
    clientId: cid ? parseInt(cid) : 0,
    id: id ? parseInt(id) : 0,
    serviceId: sid ? parseInt(sid) : 0,
  };
  const { data } = useGetClient(params);
  const currentMonth = getMonth();

  return (
    <div className="dark:text-gray-300">
      {/* Section 1 
      Client info Name , Contact Info , Address , 
      Total Amount , Total Units of current month , month
    */}
      <section className="text-l flex justify-evenly font-bold gap-10 bg-slate-300 p-5 rounded-md uppercase dark:text-gray-300  dark:bg-gray-800">
        <div>
          <p>Name: {data?.name}</p>
          <p>Contact Info.: {data?.contactInfo}</p>
          {data?.address && <p>Address: {data?.address}</p>}
        </div>
        <div className="border-r border-black dark:border-gray-300"></div>
        <div className="w-1/3 text-center text-xl uppercase">
          <p>{currentMonth}</p>
          <p className="border-b border-black dark:border-gray-300"></p>
        </div>
      </section>
      {/* Section 2
      Add Record (today)
      date , units , price count , save button
      */}

      {/* Section 3
      current month Records

      previous month  - total
      */}
      <section>
        <RecordList />
      </section>
    </div>
  );
}

export default Client;
