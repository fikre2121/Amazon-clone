import React from "react";
import "./header.css";
import { IoMdMenu } from "react-icons/io";
function Lowerheder() {
  return (
    <div>
      <ul className="lower-header">
        <li className="menubare">
          <IoMdMenu />
          <p>All</p>
        </li>

        <li>Today's Deals</li>
        <li>Registry</li>
        <li>Prime Video</li>
        <li>Gift Cards</li>
        <li>Customer Service</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}
export default Lowerheder;
