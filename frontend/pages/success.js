import { useRouter } from "next/router";
import styled from "styled-components";
const { motion } = require("framer-motion");
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  return { props: { order } };
}

const success = ({ order }) => {
  const route = useRouter();

  console.log(order);
  return (
    <Wrapper>
      <Card
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75 }}>
        <h1>Thank you for your order</h1>
        <h2>A confirmation email has been sent to:</h2>
        <h2>{order.customer_details.email}</h2>
        <InfoWrapper>
          <Address>
            <h3>Address</h3>
            {Object.entries(order.customer_details.address).map(
              ([key, val]) => (
                <p key={key}>
                  {key} : {val}
                </p>
              )
            )}
          </Address>
          <OrderInfo>
            <h3>Products</h3>
            {order.line_items.data.map((item) => (
              <div key={item.id}>
                <p>Product: {item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price.unit_amount}</p>
              </div>
            ))}
          </OrderInfo>
        </InfoWrapper>
        <button onClick={() => route.push("/")}>Continue Shopping</button>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 5rem;
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 2rem;
  padding: 3rem 3rem;

  h2 {
    margin: 1rem 0;
  }

  button {
    color: white;
    background: var(--primary);
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem 2rem;
    cursor: pointer;
  }
`;

const Address = styled.div`
  font-size: 1rem;
  width: 100%;
`;

const OrderInfo = styled.div`
  font-size: 1rem;
  width: 100%;

  div {
    padding-bottom: 1rem;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  margin: 2rem;
`;

export default success;
