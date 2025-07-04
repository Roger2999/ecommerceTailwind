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
  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <p>Cargando productos...</p>
        </div>
      ) : isError ? (
        <div className="error-container">
          <p>Ha ocurrido un error: {error.message}</p>
        </div>
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
                    <div className="flex flex-col items-center mt-2">
                      {inCar ? (
                        <>
                          <QuantityButton
                            id={product.id}
                            quantity={inCarQuantity.quantity}
                            className=" text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 "
                          />
                          <Button
                            handleClick={() => removeFromCar(product.id)}
                            label={"Quitar del carrito"}
                            className="w-40 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-3 py-1.5 text-center mb-4 mt-4"
                          />
                        </>
                      ) : (
                        <Button
                          handleClick={() => addToCar(product)}
                          label={"Agregar al carrito"}
                          className="w-40 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-3 py-1.5 text-center mb-2 mt-20"
                        />
                      )}
                    </div>
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
