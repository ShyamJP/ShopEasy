import { useState } from 'react';
import CreateNewServiceModal from './CreateNewServiceModal';
import { useAllServices } from './useAllServices';
import { useNavigate, useParams } from 'react-router-dom';

export const Services = () => {
  const [isCreateServiceModalVisible, setIsCreateServiceModalVisible] =
    useState(false);
  const { id } = useParams<{ id: string }>();
  const userId = id ? parseInt(id) : 0;
  const { data, refetch } = useAllServices({ id: userId });
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsCreateServiceModalVisible(true);
  };

  const handleCloseModal = async () => {
    setIsCreateServiceModalVisible(false);
    await refetch();
  };

  return (
    <section className="w-full py-10 md:py-10 lg:py-10">
      <div className="flex flex-col items-center gap-6 mx-2 md:mx-16">
        <div className="flex flex-wrap items-center justify-between w-full">
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-3xl font-bold tracking-tighter dark:text-gray-300">
              Our Services
            </h2>
          </div>
          <button
            onClick={handleOpenModal}
            className="inline-flex h-10 items-center justify-center rounded-md dark:text-gray-300 dark:bg-gray-800 bg-slate-400 text-black px-4 md:px-8 text-sm sm:text-xl font-medium shadow transition-colors hover:scale-95 disabled:pointer-events-none"
          >
            Create new Service
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.map((item: getServicesDataType) => (
            <>
              <div
                onClick={() => navigate(`/service/${userId}/${item.id}`)}
                className="rounded-lg shadow-xl min-w-60 bg-slate-300 dark:bg-gray-800 dark:text-gray-200 overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium dark:text-gray-100">
                      {item.serviceName}
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">
                      {item.unit}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold dark:text-gray-100">
                      ${item.pricePerUnit}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <CreateNewServiceModal
        isVisible={isCreateServiceModalVisible}
        onClose={handleCloseModal}
      />
    </section>
  );
};
