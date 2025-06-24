import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EcommerceApp } from "./EcommerceApp";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <StrictMode>
        <EcommerceApp />
      </StrictMode>
    </BrowserRouter>
  </QueryClientProvider>
);
