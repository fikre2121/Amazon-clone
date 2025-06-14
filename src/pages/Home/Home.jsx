import React from "react";
import Header from "../../Components/Header/Header";
import Carousel from "../../Components/Carousel/Carousel";
import Catagorylist from "../../Components/Catagory/Catagorylist";
import Productlist from "../../Components/Products/productlist/Productlist";
import Layout from "../../Components/Layout/Layout";
function Home() {
  return (
    <>
      <Layout>
        <Carousel />
        <Catagorylist />
        <Productlist />
      </Layout>
    </>
  );
}
export default Home;
