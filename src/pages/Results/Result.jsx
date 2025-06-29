import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Components/Api/endpoints";
import classes from "./result.module.css";
import CategoryDitail from "../CategoryDitail/CategoryDitail";
import Loader from "../../Components/Loader/Loader";

function Result() {
  const [singleproduct, SetSingleproduct] = useState([]);
  const { categoryName } = useParams();
  const [Isloading, Setloading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        Setloading(true);
        const singlep = await axios.get(
          `${productUrl}/products/category/${categoryName}`
        );
        console.log(singlep.data);
        SetSingleproduct(singlep.data);
        Setloading(false);
      } catch (error) {
        console.log("error", error);
        Setloading(false);
      }
    })();
  }, [categoryName]);

  return (
    <Layout>
      <div>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />
        {Isloading ? (
          <Loader />
        ) : (
          <div className={classes.productlist_container}>
            {singleproduct.map((product) => (
              <CategoryDitail product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
export default Result;
