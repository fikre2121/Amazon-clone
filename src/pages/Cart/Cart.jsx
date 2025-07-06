import React from "react";
import Layout from "../../Components/Layout/Layout";
import { Datacontext } from "../../Components/DataProvider/DataProvider";
import { useContext } from "react";
import ProductDcard from "../ProductDetaile/ProductDcard/ProductDcard";
import { Link } from "react-router-dom";
import Currency from "../../Components/Currencyformater/Currency";
import clases from "./cart.module.css";
import { type } from "../../Utility/Action.type";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Cart() {
  const {
    state: { basket },
    dispatch,
  } = useContext(Datacontext);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: type.ADD_TOA_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: type.REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <div>
      <Layout>
        <section className={clases.container}>
          <div className={clases.cart_container}>
            <h2>Hello</h2>
            <h3>Your shoping basket</h3>
            <hr />
            {basket?.length == 0 ? (
              <p>opps ! No itme in your cart</p>
            ) : (
              basket?.map((item) => {
                return (
                  <section className={clases.cart_product}>
                    <ProductDcard
                      product={item}
                      renderDesc={item}
                      flex={true}
                      key={item.id}
                      renderAdd={false}
                    />
                    <div className={clases.btn_container}>
                      <button
                        className={clases.btn}
                        onClick={() => increment(item)}
                      >
                        <IoIosArrowDown size={20}/>
                      </button>
                      <span>{item.amount}</span>
                      <button
                        className={clases.btn}
                        onClick={() => decrement(item.id)}
                      >
                        <IoIosArrowUp size={20} />
                      </button>
                    </div>
                  </section>
                );
              })
            )}
          </div>
          {basket?.length !== 0 && (
            <div className={clases.subtotal}>
              <div>
                <p>Subtotal({basket?.length} items)</p>
                <Currency amount={total} />
              </div>
              <span>
                <input type="checkbox"></input>
                <small>this order contains a gift</small>
              </span>
              <Link to="/payments"> cotinue to checkout</Link>
            </div>
          )}
        </section>
      </Layout>
    </div>
  );
}
export default Cart;
