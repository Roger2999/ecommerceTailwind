export const QuantityButton = ({ moreLot, lessLot, id, quantity }) => {
  return (
    <>
      <div className="button-container  ">
        <button
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-4 self-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          type="button"
          onClick={() => lessLot(id)}
        >
          -
        </button>
        <button
          className=" text-black  font-medium rounded-lg text-sm  px-5 py-2.5 self-center dark:bg-white-600  "
          type="button"
        >
          {quantity}
        </button>
        <button
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-4 self-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          type="button"
          onClick={() => moreLot(id)}
        >
          +
        </button>
      </div>
    </>
  );
};
