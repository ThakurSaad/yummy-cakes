import "./Shop.css";
import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // choose again btn handler
  const chooseAgain = () => {
    const newCart = [];
    setCart(newCart);
  };

  // add to cart btn handler
  const addToCart = (id) => {
    const storedCart = products.find((product) => product.id === id);
    const exists = cart.find((product) => product.id === storedCart.id);
    if (exists) {
      return;
    } else {
      const newCart = [...cart, storedCart];
      setCart(newCart);
    }
  };

  // choose one for me btn handler
  const chooseForMe = () => {
    // handle error for the empty cart
    if (cart.length === 0) {
      return;
    } else {
      alert(
        `Selection done!
Santa says 🎅 "savor every last bit of this yummy cake" 🍴`
      );
      const random = Math.floor(Math.random() * cart.length);
      const cartItem = cart[random];
      const newCart = [cartItem];
      setCart(newCart);
    }
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart
          cart={cart}
          chooseForMe={chooseForMe}
          chooseAgain={chooseAgain}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;
