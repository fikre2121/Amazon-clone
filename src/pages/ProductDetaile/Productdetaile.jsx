import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Components/Api/endpoints";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import classes from "../Results/result.module.css"
import Product from "../../Components/Products/Product/Product";
// import Loader from "../../Components/Loader/Loader";
function Productdetaile() {
  const [Pdetaile, setPdetaile] = useState([]);
  const { productId } = useParams();
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //  setIsLoading(true)
    (async () => {
      try {
        const detaile = await axios.get(`${productUrl}/products/${productId}`);
        console.log(detaile.data);
        setPdetaile(detaile.data);
       setIsLoading(false)
      } catch (error) {
        console.log("error", error);
        // setIsLoading(false)
      }
    })();
  }, [productId]);
  return (
    <Layout>
      <div className={classes.productlist_container}>
        <Product data={Pdetaile} flex={true} renderAdd={true} />
      </div>
    </Layout>
  );
}
export default Productdetaile;
