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

  // add to cart btn handler
  const addToCart = (id) => {
    const storedCart = products.find((product) => product.id === id);
    const newCart = [...cart, storedCart];
    setCart(newCart);
  };

  // choose one for me btn handler
  const chooseForMe = () => {
    const random = Math.floor(Math.random() * cart.length);
    const cartItem = cart[random];
    const newCart = [cartItem]
    setCart(newCart);
    console.log(cart, random, cartItem, newCart);
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
        <Cart cart={cart} chooseForMe={chooseForMe}></Cart>
      </div>
    </div>
  );
};

export default Shop;
