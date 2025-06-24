import { useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState("all");
  const onCategoryChange = (e) => {
    setCategories(e.target.value);
  };
  return {
    categories,
    setCategories,
    onCategoryChange,
  };
};
