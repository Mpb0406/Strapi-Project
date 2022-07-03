import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
  Checkout,
} from "../styles/CartStyles";
import { Quantity } from "../styles/ProductDetails";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const Cart = () => {
  const { cartItems, setShowCart, onAdd, onRemove, totalPrice } =
    useStateContext();
  return (
    <CartWrapper onClick={() => setShowCart(false)}>
      <CartStyle onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <EmptyStyle>
            <h1>No items in cart...</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => (
            <Card key={item.slug}>
              <img
                src={item.image.data.attributes.formats.thumbnail.url}
                alt={item.title}
              />
              <CardInfo>
                <h3>{item.title}</h3>
                <h3>${item.price}</h3>
                <Quantity>
                  <span>Quantity</span>
                  <button>
                    <AiFillMinusCircle onClick={() => onRemove(item)} />
                  </button>
                  <p>{item.quantity}</p>
                  <button>
                    <AiFillPlusCircle onClick={() => onAdd(item, 1)} />
                  </button>
                </Quantity>
              </CardInfo>
            </Card>
          ))}
        {cartItems.length >= 1 && (
          <Checkout>
            <h3>Subtotal: ${totalPrice}</h3>
            <button>Purchase</button>
          </Checkout>
        )}
      </CartStyle>
    </CartWrapper>
  );
};

export default Cart;
