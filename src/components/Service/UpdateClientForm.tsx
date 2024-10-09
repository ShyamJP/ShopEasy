import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function UpdateClientForm({ rowData }) {
  const schema = yup.object({
    name: yup.string().required(),
    contactInfo: yup.string().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <form>
      <div className="grid grid-cols-4 items-center gap-4">
        <label
          htmlFor="name"
          className="text-right text-gray-600 dark:text-gray-300"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter Client Name"
          {...register('name')}
          className="col-span-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-gray-600"
        />
        {errors && (
          <p className="text-red-500 text-xs italic">{errors.name?.message}</p>
        )}
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label
          htmlFor="contactInfo"
          className="text-right text-gray-600 dark:text-gray-300"
        >
          Contact Info
        </label>
        <input
          id="contactInfo"
          type="text"
          placeholder="Enter Mo.no 9995555999"
          {...register('contactInfo')}
          className="col-span-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-gray-600"
        />
        {errors && (
          <p className="text-red-500 text-xs italic">
            {errors.contactInfo?.message}
          </p>
        )}
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label
          htmlFor="address"
          className="text-right text-gray-600 dark:text-gray-300"
        >
          Address
        </label>
        <input
          id="address"
          type="textarea"
          placeholder="Address...."
          defaultValue={''}
          {...register('address')}
          className="col-span-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-gray-600"
        />
        {errors && (
          <p className="text-red-500 text-xs italic">
            {errors.address?.message}
          </p>
        )}
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          className="inline-flex h-9 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex h-9 items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-400 dark:focus-visible:ring-green-500 disabled:pointer-events-none disabled:opacity-50"
          disabled={isPending}
        >
          {!isPending ? 'Add Client' : 'Creating...'}
        </button>
      </div>
    </form>
  );
}

export default UpdateClientForm;
