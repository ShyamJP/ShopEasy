const BackendURL = import.meta.env.VITE_API_URL;
import axios from 'axios';

export async function createRecords(data: createRecordTypes) {
  try {
    const { clientId, serviceId, units, totalPrice, date, price } = data;

    const response = await axios.post(
      `${BackendURL}${clientId}/${serviceId}`,
      {
        clientId,
        serviceId,
        units,
        price,
        totalPrice,
        date,
      },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.log('Record not found ', error);
  }
}

export async function deleteRecords() {}

export async function updateRecords() {}
