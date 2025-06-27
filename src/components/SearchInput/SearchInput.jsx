import { CategoriesBar } from "../CategoriesBar/CategoriesBar";
import "./SearchInput.css";
export const SearchInput = ({ search, onChange }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="max-w-lg mx-auto container" onSubmit={onSubmit}>
        <div className="flex">
          <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray"
          >
            Buscar
          </label>
          <CategoriesBar />
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400
              dark:text-black dark:focus:border-blue-500"
              placeholder="Buscador..."
              value={search}
              onChange={onChange}
            />
          </div>
        </div>
      </form>
    </>
  );
};
