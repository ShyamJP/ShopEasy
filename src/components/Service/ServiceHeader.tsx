import { FC } from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import { GrServices } from 'react-icons/gr';
import { HiCurrencyRupee } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';

interface ServiceHeaderType {
  service: getServicesDataType | undefined;
  clients: getClientListType[] | undefined;
}

const ServiceHeader: FC<ServiceHeaderType> = ({ service, clients }) => {
  return (
    <section className="grid grid-cols-1 gap-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 flex-wrap justify-center sm:flex  text-center align-middle sm:justify-around border-y-2 border-gray-100 p-1 dark:text-gray-300 dark:bg-gray-800">
      <div className="flex pr-5 justify-center">
        <div className="my-2 text-3xl m-3 content-center">
          <GrServices />
        </div>
        <div className="flex-row">
          <p className="text-lg">{service?.serviceName}</p>
          <p className="text-lg">UNIT NAME: {service?.unit} </p>
          <span className="flex">
            <p className="flex text-lg">
              PRICE PER UNIT :
              <span className="font-bold text-lg">{service?.pricePerUnit}</span>
              <span className="mt-1">
                <FaRupeeSign />
              </span>
            </p>
          </span>
        </div>
      </div>

      <div className="flex pr-5 justify-center">
        <div className="my-2 text-3xl m-3 content-center">
          <FaUsers />
        </div>
        <div className="flex-row">
          <p className="text-lg">CLIENTS</p>
          <p className="text-lg font-bold text-green-700">{clients?.length}</p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="my-2 text-3xl m-3 content-center">
          <HiCurrencyRupee />
        </div>
        <div className="flex-row">
          <p className="text-lg">Profit current month</p>
          <p className="text-lg font-bold text-lg">5000</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeader;
