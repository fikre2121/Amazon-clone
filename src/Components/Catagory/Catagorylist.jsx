import React from "react";
import  catagoryimg  from "./catagoryFull";
import CatagoryCard from "./CatagoryCard";
import stayle from "./catagory.module.css"
function Catagorylist() {
  return ( 
    <div className={stayle["catagory-container"]}>
      {catagoryimg.map((items,index) => {
        return <CatagoryCard key={index} data={items} />;
      })}
    </div>
  );
}
export default Catagorylist;
