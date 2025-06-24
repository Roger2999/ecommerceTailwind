export const CategoriesBar = ({
  categories,
  onCategoryChange,
  allCategories,
}) => {
  return (
    <>
      <select
        className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-white-100 border border-gray-300 rounded-s-lg hover:bg-white-200 focus:ring-1 focus:outline-none focus:ring-gray-100 dark:bg-gray-400 dark:hover:bg-gray-200 dark:focus:ring-gray-700 dark:text-black dark:border-gray-600"
        name="categorias"
        id="categorias"
        value={categories}
        onChange={onCategoryChange}
      >
        <option value="all">Todos</option>
        {allCategories.map((c) => (
          <option value={c} key={c}>
            {c}
          </option>
        ))}
      </select>
    </>
  );
};
