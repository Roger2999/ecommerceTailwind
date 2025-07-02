import { useCarStore } from "../../stores/useCarStore";
import { QuantityButton } from "../QuantityButton";
import { Button } from "../QuantityButton/Button";
import "./Cards.css";
export const Cards = ({
  car,
  isLoading,
  isError,
  error,
  addToCar,
  removeFromCar,

  productsFiltrated,
}) => {
  const moreLot = useCarStore((state) => state.moreLot);
  const lessLot = useCarStore((state) => state.lessLot);
  return (
    <>
      {isLoading ? (
        <p>Cargando productos...</p>
      ) : isError ? (
        <p>Ha ocurrido un error: {error.message}</p>
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {productsFiltrated.map((product) => {
                //RETORNA BOOLEANO, TRUE SI SE COMPLE LA CONDICION Y FALSE SI NO
                const inCar = car.some((item) => item.id === product.id);
                //RETORNA UN OBJETO QUE CUMPLA LAS CONDICIONES
                const inCarQuantity = car.find(
                  (item) => item.id === product.id
                );
                return (
                  <div
                    key={product.id}
                    className="group flex flex-col justify-between h-full bg-white rounded-lg p-2 shadow"
                  >
                    <div>
                      <div className="w-full h-48 flex items-center justify-center bg-white rounded-lg card-container">
                        <img
                          alt={product.title}
                          src={product.image}
                          className="max-h-full max-w-full object-contain group-hover:opacity-75"
                        />
                      </div>
                      <h3 className="mt-4 text-sm text-gray-700 text-center">
                        {product.title}
                      </h3>
                      <p className="mt-1 text-lg font-medium text-gray-900 text-center">
                        {product.price}
                      </p>
                    </div>
                    {inCar ? (
                      <>
                        <QuantityButton
                          moreLot={moreLot}
                          lessLot={lessLot}
                          id={product.id}
                          quantity={inCarQuantity.quantity}
                          className="button-container"
                        />
                        <Button
                          type="button"
                          variant="outcard"
                          handleClick={() => removeFromCar(product.id)}
                          label={"Quitar del carrito"}
                        />
                      </>
                    ) : (
                      <Button
                        type="button"
                        variant="incard"
                        handleClick={() => addToCar(product)}
                        label={"Agregar al carrito"}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
