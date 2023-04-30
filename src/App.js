import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showcartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };
  return (
    <>
      {cartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showcartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
