export const QuantityButton = ({ moreLot, lessLot, id, quantity }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:gap-2 gap-1 button-container">
      <button
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-base w-8 h-8 flex items-center justify-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        type="button"
        onClick={() => lessLot(id)}
        aria-label="Disminuir cantidad"
      >
        -
      </button>
      <span className="text-black font-semibold rounded-lg text-base px-4 py-1 bg-gray-100 border border-gray-300 mx-1 select-none text-center min-w-[2.5rem]">
        {quantity}
      </span>
      <button
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-base w-8 h-8 flex items-center justify-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        type="button"
        onClick={() => moreLot(id)}
        aria-label="Aumentar cantidad"
      >
        +
      </button>
    </div>
  );
};
