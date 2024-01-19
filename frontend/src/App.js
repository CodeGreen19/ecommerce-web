import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Menubar from "./components/navbar/Menubar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import NotAllow from "./components/utils/NotAllow";
import NotFound from "./components/utils/NotFound";
import EmptyCart from "./components/utils/EmptyCart";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

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
          <Route path="/profile" element={user ? <Profile /> : <NotAllow />} />
          <Route path="/products" element={<Prouducts />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={user ? <CartItem /> : <EmptyCart />} />
          <Route
            path="/cart/payment"
            element={user ? <Payment /> : <NotAllow />}
          />
          <Route path="/payment/cancel" element={<Cancel />} />
          <Route path="/payment/success" element={<Success />} />
          <Route path="/admin/create" element={<CreateProduct />} />
          <Route
            path="/admin/products"
            element={user ? <Products /> : <NotAllow />}
          />
          <Route
            path="/admin/dashboard"
            element={user ? <Dashboard /> : <NotAllow />}
          />
          <Route
            path="/admin/users"
            element={user ? <Users /> : <NotAllow />}
          />
          <Route
            path="/admin/orders"
            element={user ? <Orders /> : <NotAllow />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
