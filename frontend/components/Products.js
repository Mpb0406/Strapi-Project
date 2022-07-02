import { ProductStyle } from "../styles/ProductStyles";
import Link from "next/link";

const Products = ({ product }) => {
  // Destructure info from product object
  const { title, price, image, slug } = product.attributes;

  return (
    <ProductStyle>
      <Link href={`/product/${slug}`}>
        <div>
          <img src={image.data.attributes.formats.thumbnail.url} alt="" />
        </div>
      </Link>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </ProductStyle>
  );
};

export default Products;
