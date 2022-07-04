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
    <CartWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(false)}>
      <CartStyle
        initial={{ x: "50%" }}
        animate={{ x: "0%" }}
        exit={{ x: "50%" }}
        onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <EmptyStyle
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.1, duration: 0.2 },
            }}>
            <h1>No items in cart...</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => (
            <Card
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              key={item.slug}>
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
