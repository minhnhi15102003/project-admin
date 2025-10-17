import { HashRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Dashboard/Home";
import { ListProduct } from "./pages/ProductManagement/ListProduct";
import Product from "./pages/ProductManagement/Product";
import ListCategory from "./pages/Category/ListCategory";
import SignUp from "./pages/AuthenPages/SignUp";
import SignIn from "./pages/AuthenPages/SignIn";

export default function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}
