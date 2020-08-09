import React from "react";
import { updateItem, deleteItem } from "../redux/action";
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

  componentDidMount() {
    let { id } = this.props.match.params;
    let item = this.props.products.find((ele) => ele.id == id);
    this.setState({
      ...item,
      category: item.category,
      description: item.description[0].line,
    });
  }

  render() {
    const { item, category, img, price, description } = this.state;
    const { updateItem, products, deleteItem } = this.props;
    return (
      <div
        style={{
          textAlign: "center",
          border: "1px solid black",
          width: "60%",
          margin: "0 20%",
        }}
      >
        <div
          style={{
            border: "1px solid black",
            padding: "10px 0",
          }}
        >
          <div style={{ fontSize: "25px", fontWeight: "bolder" }}>
            EDIT PRODUCT
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
            value={category}
            name="category"
            placeholder="Category"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <button onClick={() => updateItem(this.state)}>
            ADD NEW PRODUCT
          </button>
        </div>
        <table style={{ flex: 1, margin: "auto" }}>
          <tr style={{ outline: "1px solid black" }}>
            <th>item</th>
            <th>price</th>
            <th>category</th>
            <th colSpan="2">actions</th>
          </tr>
          {products?.map((item) => (
            <tr key={item.id} style={{ outline: "1px solid black" }}>
              <td>{item.item}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
              <td>
                <Link to={`/addproducts`}>
                  <button>Done</button>
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
  updateItem: (payload) => dispatch(updateItem(payload)),
  deleteItem: (payload) => dispatch(deleteItem(payload)),
});

export default connect(mapStasteToProps, mapDispatchToProps)(AllProducts);
