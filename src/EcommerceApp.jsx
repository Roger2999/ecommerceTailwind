import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { ProductsPage } from "./pages/ProductsPage";
import { CarPage } from "./pages/CarPage";
import { LoginPage } from "./pages/LoginPage";
import { Footer } from "./components/Footer";

export const EcommerceApp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/car" element={<CarPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
