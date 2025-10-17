import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import SignUp from "./pages/AuthenPages/SignUp";
import SignIn from "./pages/AuthenPages/SignIn";
import Product from "./pages/ProductManagement/Product";
import Home from "./pages/Dashboard/Home";
import { ListProduct } from "./pages/ProductManagement/ListProduct";
import ListCategory from "./pages/Category/ListCategory";

export default function App() {
  return (
    <BrowserRouter basename="/project-admin">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="list-product" element={<ListProduct />} />
          <Route path="product" element={<Product />} />
          <Route path="category" element={<ListCategory />} />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
