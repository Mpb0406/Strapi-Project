import { useRouter } from "next/router";

const success = () => {
  const route = useRouter();

  return (
    <div>
      <div>
        <h1>Thank you for your order</h1>
        <h2>A confirmation email has been sent to</h2>
        <h2>Email</h2>
        <div>
          <h3>Address</h3>
          <h2>Address Info</h2>
        </div>
        <div>
          <h3>Products</h3>
          <h2>All Products displayed here</h2>
        </div>
        <button onClick={() => route.push("/")}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default success;
