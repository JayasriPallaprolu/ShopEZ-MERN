import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import AddProduct from "./pages/Admin/AddProduct";
import ProductList from "./pages/Admin/ProductList";
import EditProduct from "./pages/Admin/EditProduct";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/checkout" element={<Checkout />} />

<Route path="/orders" element={<Orders />} />
        <Route
  path="/admin/edit-product/:id"
  element={<EditProduct />}
/>
        <Route
  path="/admin/products"
  element={<ProductList />}
/>
      </Routes>
    </>
  );
}

export default App;