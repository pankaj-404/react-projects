import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  const { isAdmin } = props;
  const style = {
    background: "gray",
    padding: "10px",
  };
  const style2 = {
    color: "white",
    textDecoration: "none",
    padding: "10px 30px",
    fontSize: "20px",
  };
  return (
    <div style={style}>
      <Link style={style2} to="/">
        Home
      </Link>
      <Link style={style2} to="/addproducts">
        Addproducts
      </Link>
      <Link style={style2} to="/cart">
        Cart
      </Link>
      <Link style={style2} to="/orders">
        Orders
      </Link>
    </div>
  );
}
