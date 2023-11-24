import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import CarouselBox from "./components/carousel/CarouselBox";
import Card from "./components/utils/Card";
import Menubar from "./components/navbar/Menubar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/actions/user";
import Profile from "./components/profile/Profile";
import CreateProduct from "./components/admin/product/CreateProduct";
import Options from "./components/admin/Options";
import Products from "./components/admin/product/Products";
import Dashboard from "./components/admin/dashboard/Dashboard";
import Users from "./components/admin/users/Users";
import Orders from "./components/admin/orders/Orders";
import Loading from "./components/loading/Loading";
import Prouducts from "./components/products/Prouducts";
import ProductDetail from "./components/products/ProductDetail";

import { Toaster } from "react-hot-toast";
import { toastOption } from "./components/utils/Items";
import CartItem from "./components/cart/CartItem";
import Payment from "./components/payment/Payment";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <Router>
      <div>
        <Menubar />
        <Toaster toastOptions={toastOption} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/create" element={<CreateProduct />} />
          <Route path="/admin/options" element={<Options />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carousel" element={<CarouselBox />} />
          <Route path="/card" element={<Card />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/products" element={<Prouducts />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart/payment" element={<Payment />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
