import { ProductStyle } from "../styles/ProductStyles";

const Products = ({ product }) => {
  // Destructure info from product object
  const { title, price, image } = product.attributes;

  return (
    <ProductStyle>
      <div>
        <img src={image.data.attributes.formats.thumbnail.url} alt="" />
      </div>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </ProductStyle>
  );
};

export default Products;
