import React, { useContext } from "react";
import MealForm from "./MealForm";
import CartContext from "../../store/CartContext";

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
