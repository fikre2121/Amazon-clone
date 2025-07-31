import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Payment from "./pages/Payment/Payment";
import Order from "./pages/Order/Order";
import Cart from "./pages/Cart/Cart";
import Result from "./pages/Results/Result";
import Productdetaile from "./pages/ProductDetaile/Productdetaile";
import { CheckoutProvider } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import Routingprotected from "./Components/Routingprotected/Routingprotected";
const stripePromise = loadStripe(
  "pk_test_51Rl2P304SY1VsE80fNDJEmIplYgE20F8E9vCpsnhU08KSGbHuz5QpguUqGWJAIO09f2Xv0uKoBB8TmXkAJPenCVD00c4MhjeE6"
);
function Routering() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payment"
          element={
            <Routingprotected msg={"you must log in to pay"} redirect={"/payment"}>
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </Routingprotected>
          }
        />
        <Route path="/orders" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Result />} />

        <Route path="/products/:productId" element={<Productdetaile />} />
      </Routes>
    </div>
  );
}
export default Routering;
