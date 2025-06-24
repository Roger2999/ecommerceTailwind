import { Cards } from "../../components/Cards";
import { SearchInput } from "../../components/SearchInput";
import { useCategories } from "../../customHooks/useCategories";
import { useProducts } from "../../customHooks/useProducts";
import { useSearch } from "../../customHooks/useSearch";
import { useCarStore } from "../../stores/useCarStore";

export const ProductsPage = () => {
  const { products, isLoading, isError, error } = useProducts();
  const car = useCarStore((state) => state.car);
  const addToCar = useCarStore((state) => state.addToCar);
  const removeFromCar = useCarStore((state) => state.removeFromCar);
  const { search, onChange } = useSearch();
  const { categories, setCategories, onCategoryChange } = useCategories();
  const allCategories = [...new Set(products.map((p) => p.category))];
  return (
    <>
      <SearchInput
        search={search}
        onChange={onChange}
        categories={categories}
        setCategories={setCategories}
        onCategoryChange={onCategoryChange}
        allCategories={allCategories}
      />
      <Cards
        car={car}
        products={products}
        isLoading={isLoading}
        isError={isError}
        error={error}
        addToCar={addToCar}
        removeFromCar={removeFromCar}
        search={search}
        categories={categories}
      />
    </>
  );
};
