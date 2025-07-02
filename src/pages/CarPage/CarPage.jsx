import { QuantityButton } from "../../components/QuantityButton";
import { useCarStore } from "../../stores/useCarStore";

export const CarPage = () => {
  const car = useCarStore((state) => state.car);
  const removeFromCar = useCarStore((state) => state.removeFromCar);

  const totalPrice = car
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return (
    <>
      <div className="flex justify-center items-start py-8 px-2">
        <div className="w-full max-w-6xl relative overflow-x-auto shadow-lg rounded-xl border border-gray-200 bg-white p-6">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] sm:min-w-0 table-fixed text-xs sm:text-sm text-left rtl:text-right text-gray-700 border-collapse">
              <colgroup>
                <col style={{ width: "28%" }} />
                <col style={{ width: "22%" }} />
                <col style={{ width: "18%" }} />
                <col style={{ width: "18%" }} />
                <col style={{ width: "14%" }} />
              </colgroup>
              <thead className="text-xs uppercase bg-gray-100 text-gray-700 text-center">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-2 sm:py-3 border-b border-gray-200 break-words"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-2 sm:py-3 border-b border-gray-200 break-words"
                  >
                    Categoria
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-2 sm:py-3 border-b border-gray-200 break-words"
                  >
                    Precio
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-2 sm:py-3 border-b border-gray-200 break-words"
                  >
                    Cantidad
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-2 sm:py-3 border-b border-gray-200 break-words"
                  >
                    Eliminar
                  </th>
                </tr>
              </thead>
              <tbody>
                {car.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No hay productos en el carrito
                    </td>
                  </tr>
                )}
                {car.map((product) => (
                  <tr
                    key={product.id}
                    className="odd:bg-white even:bg-gray-50 border-b border-gray-200 text-center"
                  >
                    <th
                      scope="row"
                      className="px-2 py-2 sm:py-4 font-medium text-gray-900 border-b border-gray-200 break-word text-start"
                    >
                      {product.title}
                    </th>
                    <td className="px-2 py-2 sm:py-4 border-b border-gray-200 break-words">
                      {product.category}
                    </td>
                    <td className="px-2 py-2 sm:py-4 border-b border-gray-200">
                      {product.price}
                    </td>
                    <td className="px-2 py-2 sm:py-4 border-b border-gray-200">
                      <QuantityButton
                        quantity={product.quantity}
                        id={product.id}
                      />
                    </td>
                    <td className="px-2 py-2 sm:py-4 border-b border-gray-200">
                      <button
                        className="font-medium text-red-600 hover:underline"
                        onClick={() => removeFromCar(product.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full flex justify-center mt-4">
            <span className="text-base sm:text-lg font-semibold text-center">
              Precio total: {totalPrice}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
