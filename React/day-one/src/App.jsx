import Navbar from "./Components/Navbar";
import "./App.css";
import ProductInfo from "./Components/ProductInfo";
import MapLoop from "./Components/MapLoop";

const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Cart = () => {
  const items = ["Wireless Earbuds", "Monitor", "SmartPhone", "Headphones"];

  return (
    <div>
      <h1>Cart 🛒</h1>
      {items.length > 0 ? (
        <>
          <h2>You have {items.length} items in your Cart</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      ) : (
        <h2>Your cart is empty!</h2>
      )}
      <br />
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Password = ({ isValid }) => {
  return isValid ? <ValidPassword /> : <InvalidPassword />;
};


const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "100px", marginLeft: "120px" }}>
        <Password isValid={true} />
        <Cart />
        <ProductInfo />
        <MapLoop />
        <ProductInfo />
      </div>
    </div>
  );
};

export default App;
