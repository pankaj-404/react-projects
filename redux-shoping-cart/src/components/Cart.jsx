import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import {
  deleteFromCart,
  addCounter,
  reduceCounter,
  addToOrders,
} from "../redux/action";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      cartArr,
      deleteFromCart,
      addCounter,
      reduceCounter,
      quantity,
      addToOrders,
    } = this.props;

    let total = Number(0);
    cartArr.map(
      (item) => (total += Number(item.quantity) * Number(item.price))
    );
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3> Cart</h3>
        <div>
          <table style={{ textAlign: "center" }}>
            <tr>
              <th>item</th>
              <th>price</th>
              <th>quantity</th>
            </tr>

            {cartArr?.map((item, i) => (
              <tr style={{ textAlign: "center" }} key={i}>
                <td>{item.item}</td>
                <td>{Number(item.price) * Number(item.quantity)}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => addCounter(item.id)}>+</button>
                  <button onClick={() => reduceCounter(item.id)}>-</button>
                  <button onClick={() => deleteFromCart(item.id)}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <th rowSpan="3">Total = {total}</th>
            </tr>
          </table>
        </div>
        <br />
        <Link to="/userDetails">
          <button>PAY</button>
        </Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartArr: state.cartArr,
  quantity: state.quantity,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFromCart: (id) => dispatch(deleteFromCart(id)),
  addCounter: (payload) => dispatch(addCounter(payload)),
  reduceCounter: (payload) => dispatch(reduceCounter(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
