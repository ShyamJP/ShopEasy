import { FC } from 'react';
import { BsShopWindow } from 'react-icons/bs';

interface HeadingProps {
  ShopName: string;
}

const Heading: FC<HeadingProps> = ({ ShopName }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border border-gray-300 dark:border-gray-700 bg-slate-300 dark:bg-gray-900 rounded-lg mx-2">
      <div className="flex items-center gap-4">
        <BsShopWindow className="text-2xl" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
          {ShopName}
        </h1>
      </div>
      {/* <div className="flex items-center justify-end gap-4 relative flex-1 max-w-md">
        <input
          type="search"
          placeholder="Search Services.."
          className="sm:w-1/2 md:w-2/3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 p-2 py-2 focus:border-gray-400 dark:focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-600"
        />
      </div> */}
    </div>
  );
};

export default Heading;
