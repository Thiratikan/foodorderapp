import React from "react";
import CartIcon from "../Cart/CartIcon";

function HeaderCartButton(props) {
  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">3</span>
    </button>
  );
}

export default HeaderCartButton;
