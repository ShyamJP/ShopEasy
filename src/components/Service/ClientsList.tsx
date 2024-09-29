import React, { useEffect, useState } from 'react';
import { useGetClients } from './useGetClients';
import { useParams } from 'react-router-dom';

function ClientsList() {
  const { id, sid } = useParams();
  const [clientlist, setClientList] = useState([]);
  const param = {
    userId: id ? parseInt(id) : 0,
    serviceId: sid ? parseInt(sid) : 0,
  };
  const { isPending, isSuccess, data } = useGetClients(param);
  useEffect(() => {
    setClientList(data?.data.data);
  });
  {
    if (isPending) {
      return <h1>Loading.....</h1>;
    }
  }
  return (
    <div>
      list of clients
      {isSuccess && (
        <ul>{clientlist && clientlist.map((c) => <h1>{c.userId}</h1>)}</ul>
      )}
    </div>
  );
}

export default ClientsList;
