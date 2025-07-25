import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./payment.module.css";
import Product from "../../Components/Products/Product/Product";
import { Datacontext } from "../../Components/DataProvider/DataProvider";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Currency from "../../Components/Currencyformater/Currency";
import { axiosInstance } from "../../Components/Api/axios";
import ClipLoader from "react-spinners/ClipLoader";
import {db} from "../../Utility/Firebase"
import { doc, setDoc } from "firebase/firestore";

function Payment() {
  const { state, dispatch } = useContext(Datacontext);
  const { basket } = state;
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);

  // total items
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  // total price
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    // console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };
  const handlePayment = async (e) => {
setProcessing(true)
    e.preventDefault();
    let clientSecret;
    //1. backend|| functions-->contact to teh client secreate
    try {
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });
      clientSecret = response.data?.clientSecret;

      // 2.client side confirmation
      const {paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
     

      // .3 after the confirmation-->order firestore database save ,clear basket
await setDoc(doc(db, "users", user.uid, "orders", paymentIntent.id), {
  basket: basket,
  amount: paymentIntent.amount,
  created: paymentIntent.created,
});


      setProcessing(false)
    } catch (error) {
      console.log(error.message);
      setProcessing(false)
    }

    
  };
  return (
    <div>
      <Layout>
        {/* header */}
        <div className={classes.pyment_header}>
          check out ({totalItem}) items
        </div>
        {/* payment method */}
        <section className={classes.payment}>
          {/* address */}
          <div className={classes.container}>
            <h3>Delivery Address</h3>
            <div className={classes.addressLines}>
              <div>fike@email.com</div>
              <div>123 React Lane</div>
              <div> Addis,IL</div>
            </div>
          </div>
          <hr />
          {/* products */}
          <div className={classes.flex}>
            <h3> Review items and delivery</h3>
            <div>
              {basket?.map((item) => (
                <Product data={item} flex={true} />
              ))}
            </div>
          </div>
          <hr />

          {/* card form  */}

          <div className={classes.flex}>
            <h3>payment methods</h3>
          </div>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order |</p>
                      <Currency amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {" "}
                    {processing ? (
                      
                      <div className={classes.loader}>
                        <ClipLoader color="gray" size={15} />
                      
                      <p>please wait......</p>
                      </div>
                    ) : (
                      "pay now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
export default Payment;
