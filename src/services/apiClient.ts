const BackendURL = import.meta.env.VITE_API_URL;
import axios from 'axios';

export async function createClient(data: createClientType) {
  try {
    const { name, userId, contactInfo, serviceId, address } = data;
    const response = await axios.post(
      `${BackendURL}client`,
      {
        name,
        userId,
        contactInfo,
        serviceId,
        address,
      },
      {
        withCredentials: true,
      }
    );

    return response;
  } catch (error) {
    console.log("Client can't created pls try Again !");
    throw error;
  }
}

export async function updateClient(data: updateClientType) {
  try {
    const { name, contactInfo, id, address } = data;

    const response = await axios.put(
      `${BackendURL}client/${id}`,
      {
        name,
        contactInfo,
        address,
      },
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log("Client can't updated pls try Again !");
    throw error;
  }
}

export async function delteClient(data: deleteClientType) {
  try {
    const { id } = data;
    const response = await axios.delete(`${BackendURL}client/${id}`, {
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.log("Client can't deleted pls try again !");
    throw error;
  }
}

export async function getClients(data: getClientsType) {
  try {
    const { userId, serviceId } = data;
    const response = await axios.get(
      `${BackendURL}client/${userId}/${serviceId}`,
      {
        withCredentials: true,
      }
    );

    return response;
  } catch (error) {
    console.log("Clients can't find pls try again");
    throw error;
  }
}

export async function serachClients(data: searchClientType) {
  try {
    const { serviceId, userId, query } = data;
    const response = await axios.get(
      `${BackendURL}client/${userId}/${serviceId}/search?query=${query}`,
      {
        withCredentials: true,
      }
    );

    return response;
  } catch (error) {
    console.log('No Clients Found ', error);
    throw error;
  }
}

export async function getClient(data: getClientType) {
  try {
    const { userId, serviceId, id } = data;
    const response = await axios.get(
      `${BackendURL}client/${userId}/${serviceId}/${id}`,
      {
        withCredentials: true,
      }
    );

    return response.data.data;
  } catch (error) {
    console.log('error getClient', error);
    throw error;
  }
}
