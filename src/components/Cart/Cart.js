import React from "react";

function Cart() {
  const cartIems = (
    <ul className="cart-items">
      {[
        {
          id: "c1",
          name: "Sushi",
          amout: 2,
          price: 12.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div className="backdrop">
      <div className="modal ">
        {cartIems}
        <div className="total">
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className="actions">
          <button className="button--alt">Close</button>
          <button className="button">Order</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
