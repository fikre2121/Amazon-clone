import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Auth/Signup";
import Payment from "./pages/Payment/Payment";
import Order from "./pages/Order/Order";
import Cart from "./pages/Cart/Cart";
import Result from './pages/Results/Result'
import Productdetaile from "./pages/ProductDetaile/Productdetaile"
function Routering() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Result />} />

        <Route path="/products/:productId" element={<Productdetaile />} />
      </Routes>
    </div>
  );
}
export default Routering;
