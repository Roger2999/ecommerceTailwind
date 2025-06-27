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
        <p>Cargando productos...</p>
      ) : isError ? (
        <p>Ha ocurrido un error: {error.message}</p>
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {productsFiltrated.map((product) => {
                const inCar = car.some((item) => item.id === product.id);
                return (
                  <div
                    key={product.id}
                    className="group flex flex-col justify-between h-full bg-white rounded-lg p-2 shadow"
                  >
                    <div>
                      <div className="w-full h-48 flex items-center justify-center bg-white rounded-lg">
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
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-4 self-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        onClick={() => removeFromCar(product.id)}
                      >
                        Quitar del carrito
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-4 self-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        onClick={() => {
                          addToCar(product);
                          console.log(car);
                        }}
                      >
                        Agregar al carrito
                      </button>
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
