import { useCarStore } from "../../stores/useCarStore";
import carPageIcon from "../../assets/car-icon.svg";
export const Badge = () => {
  const quantity = useCarStore((state) => state.car.length);
  return (
    <>
      <button
        type="button"
        className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white  rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-300 dark:hover:bg-gray-400 dark:focus:ring-gray-500"
      >
        <img
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 16"
          src={carPageIcon}
        ></img>
        <span className="sr-only">Notifications</span>
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
          {quantity}
        </div>
      </button>
    </>
  );
};
