import React from "react";
import { ADD_TO_CART } from "../redux/actionTypes";

export default function Item(props) {
  const {
    data,
    lable,
    lable2,
    lable3,
    handler,
    handler2,
    handler3,
    quantity,
  } = props;

  return (
    <div
      style={{
        height: 400,
        width: 290,
        margin: "20px",
        border: "1px solid black",
        radious: "5px",
        textAlign: "center",
      }}
    >
      <img src={data.img} alt="" width="100px" height="100px" />
      <div>{data.item}</div>
      <div>Price : ${data.price}</div>
      <div>Category : {data.category}</div>
      <div>Description : {data.description[0].line}</div>
      {lable && <button onClick={() => handler(data.id)}>{lable}</button>}
      {lable2 && <button onClick={() => handler2()}>{lable2}</button>}
      {quantity && <span>{quantity}</span>}
      {lable3 && <button onClick={() => handler3()}>{lable3}</button>}
    </div>
  );
}
