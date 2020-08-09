import React from "react";
import { addToOrders } from "../redux/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      add: "",
      phoneNo: "",
      date: "",
    };
  }

  handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
      date: {
        date: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        time: [
          new Date().getHours(),
          new Date().getMinutes(),
          new Date().getSeconds(),
        ],
      },
    });
  };

  render() {
    const { name, add, phoneNo } = this.state;
    const { addToOrders, cartArr } = this.props;
    const orderInfo = [this.state, ...cartArr];
    return (
      //   <div style={{ textAlign: "center", border: "1px solid black" }}>
      <div style={{ border: "1px solid black", width: "60%", margin: "0 20%" }}>
        <div style={{ fontSize: "25px", fontWeight: "bolder" }}>
          User Details
        </div>
        <br />
        <input
          value={name}
          name="name"
          placeholder="name"
          onChange={(e) => this.handleChange(e)}
        />
        <input
          value={add}
          name="add"
          placeholder="add"
          onChange={(e) => this.handleChange(e)}
        />
        <input
          value={phoneNo}
          name="phoneNo"
          placeholder="phoneNo"
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <button onClick={() => addToOrders(orderInfo)}>SUBMIT</button>
      </div>
      //   </div>
    );
  }
}
const mapStasteToProps = (state) => ({
  cartArr: state.cartArr,
});

const mapDispatchToProps = (dispatch) => ({
  addToOrders: (payload) => dispatch(addToOrders(payload)),
});

export default connect(mapStasteToProps, mapDispatchToProps)(AllProducts);
