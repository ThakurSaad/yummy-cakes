import React from "react";
import "./Cart.css";
import AddedProduct from "../AddedProduct/AddedProduct";

const Cart = ({ cart, chooseForMe, chooseAgain }) => {
  return (
    <div className="cart">
      <h3>Selected Cakes</h3>
      <div className="cakes">
        {cart.map((product) => (
          <AddedProduct key={product?.id} product={product}></AddedProduct>
        ))}
      </div>
      <p>
        <button className="btn-choose" onClick={() => chooseForMe()}>
          Choose One For Me
        </button>
      </p>
      <p>
        <button className="btn-choose-again" onClick={() => chooseAgain()}>
          Choose Again
        </button>
      </p>
    </div>
  );
};

export default Cart;
