import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(
        "Ha ocurrido el siguiente error",
        response.statusText,
        response.status
      );
    }
    const data = await response.json();
    console.log(data);
    return data;
  };

  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 60000,
  });

  return {
    products,
    isLoading,
    isError,
    error,
  };
};
