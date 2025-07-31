import React, { useContext, useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import { db } from "../../Utility/Firebase";
import { Datacontext } from "../../Components/DataProvider/DataProvider";
import Product from "../../Components/Products/Product/Product";
import classes from "./order.module.css";
import { esES } from "@mui/material/locale";
import {
  collection,
  doc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";


function Order() {
  const [orders, setOrders] = useState([]);
  const { state, dispatch } = useContext(Datacontext);
  const { user } = state;
  useEffect(() => {
    if (user) {
      const ordersRef = collection(
        doc(collection(db, "users"), user.uid),
        "orders"
      );
      const q = query(ordersRef, orderBy("created", "desc"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedOrders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(fetchedOrders);
        console.log("Fetched orders:", fetchedOrders);
      });
       return () => unsubscribe();
    }
  }, []);
  return (
    <div>
      <Layout>
        <section className={classes.container}>
          <div className={classes.orders_container}>
            <h2> Your Orders</h2>
            {/* Orderd items */}
            <div className={classes.order2_container}>
              {orders.length === 0 ? (
                <p>You dont have orders yet.</p>
              ) : (
                orders.map((order) => (
                  <div key={order.id} className={classes.order_card}>
                    
                    <h3>Order ID: {order?.id}</h3>
                    <p>
                      <strong>Placed on:</strong>{" "}
                      {new Date(order.created * 1000).toLocaleString()}
                    </p>
                    <p>
                      <strong>Total:</strong> ${(order.amount / 100).toFixed(2)}
                    </p>

                    <div className={classes.basket_items}>
                      <h4>Items:</h4>
                      {order.basket?.map((item, index) => (
                        <Product key={index} data={item} flex={true} />
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>{" "}
      </Layout>
    </div>
  );
}
export default Order;
