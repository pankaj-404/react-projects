import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Orders from "./Orders";
import Item from "./Item";
import AddProducts from "./AddProducts";
import EditProduct from "./EditProduct";
import { connect } from "react-redux";
import PersionDetails from "./PersionDetails";
// import{cartArr} from "../redux/"

const Routes = (state) => {
  const { cartArr, orders } = state;
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/edit/:id" render={(props) => <EditProduct {...props} />} />
      <Route
        path="/userDetails"
        render={(props) => <PersionDetails {...props} />}
      />
      {cartArr.length > 0 && <Route path="/Cart" render={() => <Cart />} />}
      <Route path="/Addproducts" render={() => <AddProducts />} />
      {orders.length > 0 && <Route path="/Orders" render={() => <Orders />} />}
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  cartArr: state.cartArr,
  quantity: state.quantity,
  orders: state.orders,
});
export default connect(mapStateToProps)(Routes);
