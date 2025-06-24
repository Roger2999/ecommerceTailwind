import { useState } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  return {
    search,
    onChange,
    setSearch,
  };
};
