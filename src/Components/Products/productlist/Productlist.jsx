import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product/Product";
import classes from "../Product/product.module.css";
import Loader from "../../Loader/Loader";

function Productlist() {
  const [product, setproduct] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const resultes = await axios.get("https://fakestoreapi.com/products");
        // console.log(resultes.data);
        setproduct(resultes.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.productlist_container}>
          {product.map((getresulte) => (
            <Product key={getresulte.id} data={getresulte} renderAdd ={true}/>
          ))}
        </div>
      )}
    </>
  );
}
export default Productlist;
