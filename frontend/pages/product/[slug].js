import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
} from "../../styles/ProductDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export default function ProductDetails() {
  const { query } = useRouter();

  // Fetch Data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  // Extract Data
  const { title, description, image } = data.products.data[0].attributes;

  console.log(title);

  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats.thumbnail.url} alt="" />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <AiFillMinusCircle />
          <p>0</p>
          <AiFillPlusCircle />
        </Quantity>
        <Buy>Add to Cart</Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}
