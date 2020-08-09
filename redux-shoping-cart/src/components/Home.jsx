import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import { addToCart } from "../redux/action";

function Home({ products, addToCart }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {products?.map((item, i) => (
        <Item key={i} data={item} lable={"ADD TO CART"} handler={addToCart} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(addToCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
