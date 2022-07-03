import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
} from "../styles/CartStyles";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const Cart = () => {
  const { cartItems, setShowCart } = useStateContext();
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
            <Card>
              <img
                src={item.image.data.attributes.formats.thumbnail.url}
                alt={item.title}
              />
              <CardInfo>
                <h3>{item.title}</h3>
                <h3>{item.price}</h3>
                <div>
                  <span>Quantity</span>
                  <button>
                    <AiFillMinusCircle />
                  </button>
                  <p>{item.quantity}</p>
                  <button>
                    <AiFillPlusCircle />
                  </button>
                </div>
              </CardInfo>
            </Card>
          ))}
      </CartStyle>
    </CartWrapper>
  );
};

export default Cart;
