import { Cards } from "../../components/Cards";
import { SearchInput } from "../../components/SearchInput";
import { useProducts } from "../../customHooks/useProducts";
import { useSearch } from "../../customHooks/useSearch";
import { useCarStore } from "../../stores/useCarStore";
import { useCategoryStore } from "../../stores/useCategoryStore";

export const ProductsPage = () => {
  const { products, isLoading, isError, error } = useProducts(
    "https://fakestoreapi.com/products"
  );
  const car = useCarStore((state) => state.car);
  const addToCar = useCarStore((state) => state.addToCar);
  const removeFromCar = useCarStore((state) => state.removeFromCar);
  const { search, onChange } = useSearch();
  const categories = useCategoryStore((state) => state.category);

  const productsFiltrated = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (product.category === categories || categories === "all")
  );
  return (
    <>
      <SearchInput search={search} onChange={onChange} />
      <Cards
        car={car}
        products={products}
        isLoading={isLoading}
        isError={isError}
        error={error}
        addToCar={addToCar}
        removeFromCar={removeFromCar}
        productsFiltrated={productsFiltrated}
      />
    </>
  );
};
