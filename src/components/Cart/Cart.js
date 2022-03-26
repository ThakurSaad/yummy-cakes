import "./Cart.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, chooseForMe }) => {
  return (
    <div className="cart">
      <h3>Selected Cakes</h3>
      <div className="cakes">
        <p>{cart.length}</p>
        {cart.map((product) => (
          <AddedProduct key={product.id} product={product}></AddedProduct>
        ))}
      </div>
      <button onClick={() => chooseForMe()}>Choose 1 for me</button>
    </div>
  );
};

// single selected cake on UI
const AddedProduct = ({ product }) => {
  return (
    <div key={product.id} className="addedProduct">
      <p>{product.name}</p>
      <button className="btn-close">
        <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Cart;
