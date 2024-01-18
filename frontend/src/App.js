import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Menubar from "./components/navbar/Menubar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/actions/user";
import Profile from "./components/profile/Profile";
import CreateProduct from "./components/admin/product/CreateProduct";
import Products from "./components/admin/product/Products";
import Dashboard from "./components/admin/dashboard/Dashboard";
import Users from "./components/admin/users/Users";
import Orders from "./components/admin/orders/Orders";
import Prouducts from "./components/products/Prouducts";
import ProductDetail from "./components/products/ProductDetail";

import CartItem from "./components/cart/CartItem";
import Payment from "./components/payment/Payment";
import ToastShow from "./components/utils/ToastShow";
import Cancel from "./components/payment/Cancel";
import Success from "./components/payment/Success";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Menubar />
        <ToastShow />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Prouducts />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/cart/payment" element={<Payment />} />
          <Route path="/payment/cancel" element={<Cancel />} />
          <Route path="/payment/success" element={<Success />} />
          <Route path="/admin/create" element={<CreateProduct />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
