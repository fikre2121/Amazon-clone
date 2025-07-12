import React, { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import "./header.css";
import Lowerheder from "./Lowerheder";
import { Link } from "react-router-dom";
import { Datacontext } from "../DataProvider/DataProvider";
import {auth} from "../../Utility/Firebase"
function Header() {
  const {
    state: { basket, user },
    dispatch,
  } = useContext(Datacontext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <section className="fix_header">
      <div className="header">
        <div className="header-left">
          <Link to="/" className="header-logo-link">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
              className="header-logo"
            />
          </Link>
          {/* delivery */}
          <span className="location-icon">
            <CiLocationOn />
          </span>
          <div className="delivery-info">
            <p className="delivery-text">Deliver to</p>
            <span className="delivery-location">Ethiopia</span>
          </div>
        </div>

        <div className="header-search">
          <select name="" id="" className="search-category">
            <option value="">All</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon"
            className="search-input"
          />
          <IoIosSearch size={""} className="search-icon" />
        </div>

        {/* right side */}
        <div className="header-right">
          <div className="language-select">
            <img
              src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
              alt=" American Flag"
              className="flag-img"
            />
            <select name="" id="" className="language-dropdown">
              <option value="">EN</option>
            </select>
          </div>

          <div className="account-signin">
            <Link to={!user && "/auth"} className="account-link">
              <div>
                {user ? (
                  <>
                    <p>Hello {user.email?.split("@")[0]}</p>
                    <span onClick={()=>auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello , Sign in</p>
                    <span className="account-lists">Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
          </div>

          <Link to="/order" className="orders-link">
            <p className="orders-text">Returns</p>
            <span className="orders-span">& Orders</span>
          </Link>

          <Link to="/cart" className="cart-link">
            <FiShoppingCart className="cart-icon" />
            <span className="cart-count">{totalItem}</span>
          </Link>
        </div>
      </div>
      <Lowerheder />
    </section>
  );
}

export default Header;
