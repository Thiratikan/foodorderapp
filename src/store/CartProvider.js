import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//  concat() is a JavaScript method that is used to combine two or more arrays into a single array.
const cartRuducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.item.concat(action.item);
    const updatedTotalAmount =
      action.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartRuducer,
    defaultCartState
  );
  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemhandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: [cartState.items],
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemhandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
