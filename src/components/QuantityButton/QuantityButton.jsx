import { useCarStore } from "../../stores/useCarStore";
import { Button } from "./Button";
export const QuantityButton = ({ quantity, id, className }) => {
  const moreLot = useCarStore((state) => state.moreLot);
  const lessLot = useCarStore((state) => state.lessLot);

  return (
    <div className="flex flex-col md:flex-row items-center md:gap-2 gap-1 button-container">
      <Button handleClick={() => lessLot(id)} label="-" className={className} />
      <span
        className={`text-black font-semibold rounded-lg text-base px-4 py-1 bg-gray-100 border border-gray-300 mx-1 select-none text-center min-w-[2.5rem]`}
      >
        {quantity}
      </span>
      <Button handleClick={() => moreLot(id)} label="+" className={className} />
    </div>
  );
};
