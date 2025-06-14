import React from "react";
import styles from "./catagory.module.css";
import { Link } from "react-router-dom";
function CatagoryCard({data}) {
  return (
    <div className={styles["catagory"]}>
      <Link to={`/category/${data.Name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imglink} alt="" />

        <p>{data.button}</p>
      </Link>
    </div>
  );
}
export default CatagoryCard;
