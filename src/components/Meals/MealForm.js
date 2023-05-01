import React, { useRef, useState } from "react";

function MealForm(props) {
  const [amountIsValid, setAmountIsValid] = useState();
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enterAmount = amountInputRef.current.value;
    const enterAmountNumber = +enterAmount;
    //trim is to delete white space
    if (
      enterAmount.trim().length === 0 ||
      enterAmountNumber < 1 ||
      enterAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enterAmountNumber);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input">
        <label>Amount</label>
        <input
          ref={amountInputRef}
          id="amount"
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>
      <button>+ ADD</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}

export default MealForm;
