import React from "react";

const SingleProduct = ({ product }) => {
  console.log(product);
  const { countInStock, description, imageUrl, name, price } = product;
  return (
    <div class="products__items__card">
      <div class="products__items__card__badge">Hot</div>
      <div class="products__items__card__tumb">
        <img src={imageUrl} alt="" />
      </div>
      <div class="product-details">
        <h4>
          <a href="#home">{name}</a>
        </h4>
        <p>{description.slice(0, 150)}</p>
        <div class="product-bottom-details">
          <div class="product-links">
            <button>Add to Cart</button>
          </div>
          <div class="product-price">$ {price}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
