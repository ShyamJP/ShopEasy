import { FC } from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import { GrServices } from 'react-icons/gr';
import { HiCurrencyRupee } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';

interface ServiceHeaderType {
  service: getServicesDataType;
}

const ServiceHeader: FC<ServiceHeaderType> = ({ service }) => {
  return (
    <section className="flex-wrap sm:flex  text-center align-middle justify-around border-y-2 border-gray-100 p-3 dark:text-gray-300 dark:bg-gray-800">
      <div className="flex pr-5">
        <div className="my-2 text-3xl m-3">
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

      <div className="flex pr-5">
        <div className="my-2 text-3xl m-3">
          <FaUsers />
        </div>
        <div className="flex-row">
          <p className="text-lg">CLIENTS</p>
          <p className="text-lg font-bold text-green-700">3000</p>
        </div>
      </div>

      <div className="flex">
        <div className="my-2 text-3xl m-3">
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
