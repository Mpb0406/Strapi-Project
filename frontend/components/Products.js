import React from "react";

const Products = ({ product }) => {
  // Destructure info from product object
  const { title, price, image } = product.attributes;

  return (
    <div>
      <div>
        <img src={image.data.attributes.formats.thumbnail.url} alt="" />
      </div>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </div>
  );
};

export default Products;
