import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Components/Api/endpoints";
import classes from "./result.module.css";
import ProductDitail from "../ProductDitail/ProductDitail";
function Result() {
  const [singleproduct, SetSingleproduct] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const singlep = await axios.get(
          `${productUrl}/products/category/${categoryName}`
        );
        console.log(singlep.data);
        SetSingleproduct(singlep.data);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [categoryName]);

  return (
    <Layout>
      <div>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />
        <div className={classes.productlist_container}>
          {singleproduct.map((product) => (
            <ProductDitail product={product} key={product.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
export default Result;
