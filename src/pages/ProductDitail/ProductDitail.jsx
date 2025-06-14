import React from 'react'
import classes from "./productditail.module.css"
import Rating from "@mui/material/Rating";
import Currency from "../../Components/Currencyformater/Currency";
 function ProductDitail({product}) {

  const { image, title, id, rating, price } = product;

  return (

    <div className={`${classes.card_container}`}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} />
          {/* count */}
          <small>{rating.count}</small>
        </div>
        <div>
          {/* price */}
          <Currency amount={price} />
        </div>
        <button className={classes.button}> add to cart</button>
      </div>
    </div>
  );
}
export default  ProductDitail
