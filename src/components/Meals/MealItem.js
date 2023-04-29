import React from "react";
import MealForm from "./MealForm";

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealForm />
      </div>
    </li>
  );
}

export default MealItem;