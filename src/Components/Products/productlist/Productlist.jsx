import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product/Product";
import classes from "../Product/product.module.css";

function Productlist() {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const resultes = await axios.get("https://fakestoreapi.com/products");
        // console.log(resultes.data);
        setproduct(resultes.data)
      } catch (error) {
        console.log("error",error)
      }
    })();
  }, []);

  return (
  <div className={classes.productlist_container}>
{product.map((getresulte)=>{

  return <Product key={getresulte.id} data={getresulte} />;
})}


  </div>
  );
}
export default Productlist;
