import "./Products.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product }) => {
  console.log(product);
  const { id, name, picture, price } = product;
  return (
    <div className="product">
      <img src={picture} alt="cake" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>
          <b>Price : ${price}</b>
        </p>
      </div>
      <button className="btn-cart">
          <p>Add To Cart &nbsp; <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </p>
      </button>
    </div>
  );
};

export default Product;
