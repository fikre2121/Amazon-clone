import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import Currency from "../../Currencyformater/Currency";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
import { Datacontext } from "../../DataProvider/DataProvider";
import { type } from "../../../Utility/Action.type";

function Product({ data }) {
  const { image, title, id, rating, price, } = data;

  const {state, dispatch} = useContext(Datacontext);
  
  const addTtocart = () => {
    dispatch({
      type: type.ADD_TOA_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
      },
    });
  };

  return (
    <div className={`${classes.card_container}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate || 0} precision={0.1} />
          {/* count */}
          <small>{rating?.count || 0}</small>
        </div>
        <div>
          {/* price */}
          <Currency amount={price} />
        </div>
        <button onClick={addTtocart} className={classes.button}>
          {" "}
          add to cart
        </button>
      </div>
    </div>
  );
}
export default Product;
