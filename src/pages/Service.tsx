import { FaRupeeSign } from 'react-icons/fa';
import { GrServices } from 'react-icons/gr';
import { HiCurrencyRupee } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';
import { PiPlus } from 'react-icons/pi';

function Service() {
  return (
    <div className="">
      {/* header of Service  - two sections vertical 
            1. Service name , price per unit , also make for update 
            2. total no. of clients 
            3. total profit of service per month
      */}
      <section className="flex-wrap sm:flex  text-center align-middle justify-around border-y-2 border-gray-100 p-3 dark:text-gray-100 dark:bg-gray-800">
        <div className="flex pr-5">
          <div className="my-2 text-3xl m-3">
            <GrServices />
          </div>
          <div className="flex-row">
            <p className="text-lg">SERVICE NAME</p>
            <span className="flex">
              <p className="text-lg">UNIT NAME: </p>
              <p className="flex">
                <span className="font-bold text-lg">100</span>
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

      {/* Row -> search bar for client , filters , Add client button */}
      <section className="flex-wrap sm:flex sm:flex-nowrap mt-2 p-2 bg-slate-300 dark:bg-gray-800">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <span className="text-gray-500">
              <FaUsers />
            </span>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm bg-slate-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/2 lg:w-1/4 ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search client..."
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="flex text-green-700 w-28 md:text-base text-sm h-10 sm:w-44  hover:text-white border border-green-700 hover:bg-green-700 focus:outline-none  font-bold rounded-lg  md:px-5 py-2 text-center me-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            <span className="mt-1 mr-2 ml-2" title="Add client">
              <PiPlus />
            </span>{' '}
            <span>Add client</span>
          </button>
        </div>
      </section>
      {/* List of clients  Table
        fields - name , contact info , createdAt , right Arrow for navigate
      */}
      <section></section>
    </div>
  );
}

export default Service;
