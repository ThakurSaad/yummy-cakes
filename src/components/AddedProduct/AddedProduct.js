import React from "react";
import "./AddedProduct.css";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// single selected cake on UI
const AddedProduct = ({ product }) => {
  return (
    <div key={product?.id} className="addedProduct">
      <p className="added-product-name">
        <small>{product?.name}</small>
        <button className="btn-close">
          <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
        </button>
      </p>
    </div>
  );
};
export default AddedProduct;
