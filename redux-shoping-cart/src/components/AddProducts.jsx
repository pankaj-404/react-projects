import React from "react";
import { addItem, deleteItem } from "../redux/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      img:
        "https://cdn.shopify.com/s/files/1/0173/8828/products/SAMSUNG_TAB_A_-_10.1_-_Kick_Stand_-_190827.311_400x400.png?v=1580178714",
      price: "",
      description: "",
      category: "",
    };
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { item, img, price, description } = this.state;
    const { addItem, products, deleteItem } = this.props;
    // console.log(this.props);
    return (
      <div
        style={{
          border: "1px solid black",
          width: "60%",
          margin: "0 20%",
          textAlign: "center",
        }}
      >
        <div style={{ outline: "1px solid black" }}>
          <div style={{ fontSize: "25px", fontWeight: "bolder" }}>
            ADD PRODUCT
          </div>
          <br />
          <input
            value={item}
            name="item"
            placeholder="item"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            value={price}
            name="price"
            placeholder="price"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <input
            value={description}
            name="description"
            placeholder="description"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            // value={description}
            name="category"
            placeholder="Category"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <button onClick={() => addItem(this.state)}>ADD NEW PRODUCT</button>
        </div>
        <table style={{ flex: 1, margin: "auto" }}>
          <tr style={{ outline: "1px solid black" }}>
            <th>item</th>
            <th>price</th>
            <th>category</th>
            <th>actions</th>
          </tr>
          {products?.map((item) => (
            <tr key={item.id} style={{ outline: "1px solid black" }}>
              <td>{item.item}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>
                <Link to={`/edit/${item.id}`}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

const mapStasteToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (payload) => dispatch(addItem(payload)),
  deleteItem: (payload) => dispatch(deleteItem(payload)),
});

export default connect(mapStasteToProps, mapDispatchToProps)(AllProducts);
