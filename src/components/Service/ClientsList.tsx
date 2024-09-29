import React, { useEffect } from 'react';
import { useGetClients } from './useGetClients';
import { useParams } from 'react-router-dom';

function ClientsList() {
  // const { isPending, isSuccess, data } = useGetClients();
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  });
  {
    if (isPending) {
      return <h1>Loading.....</h1>;
    }
  }
  return <div>list of clients</div>;
}

export default ClientsList;
