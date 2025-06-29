
import React from "react";
import Rating from "@mui/material/Rating";
import Currency from "../../../Components/Currencyformater/Currency";
import classes from "../../../pages/CategoryDitail/categoryditail.module.css";
import { Link } from "react-router-dom";


function ProductDcard({product,flex}) {

    const { image, title, id, rating, price } = product;

  return (
    <div className={classes.productd_container}>
      <div className={`${classes.card_container} ${flex ? classes.product_flxed:""}`}>
        <Link to={`/products/${id}`}>
          <img src={image} alt="" />
        </Link>
        <div>
          <h3>{title}</h3>
          <div className={classes.rating}>
            {/* rating */}
            <Rating value={rating ?.rate||0} precision={0.1} />
            {/* count */}
            <small>{rating ?.count||0}</small>
          </div>
          <div>
            {/* price */}
            <Currency amount={price} />
          </div>
          <button className={classes.button}> add to cart</button>
        </div>
      </div>
    </div>
  );
}
export default ProductDcard;
