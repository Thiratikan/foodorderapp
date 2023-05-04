import React from "react";
import { Container, BUTTON } from "../../Styling";

function CartItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  const onRemoveClickHandler = (event) => {
    event.stopPropagation(); // stop click event propagation
    props.onRemove();
  };

  const onAddClickHandler = (event) => {
    event.stopPropagation(); // stop click event propagation
    props.onAdd();
  };
  return (
    <Container>
      <li className="cart-item">
        <div>
          <h2>{props.name}</h2>
          <div className="b">
            <div className="summary">
              <span className="pricecart">{price}</span>
              <span className="amountcart">X {props.amount}</span>
            </div>
            <div className="action">
              <BUTTON onClick={onRemoveClickHandler}>-</BUTTON>

              <BUTTON onClick={onAddClickHandler}>+</BUTTON>
            </div>
          </div>
        </div>
      </li>
    </Container>
  );
}

export default CartItem;
