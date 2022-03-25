import "./Products.css";
import React from "react";

const Product = ({ product }) => {
  console.log(product);
  const { id, name, picture, price } = product;
  return (
    <div className="product">
      <h1>from product </h1>
      <img src={picture} alt="cake" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>
          <b>Price : ${price}</b>
        </p>
      </div>
      <button className="btn-cart">
          <p>Add To Cart</p>
      </button>
    </div>
  );
};

export default Product;
