import React from "react";

function MealForm() {
  return (
    <form className="form">
      <div className="input">
        <label>Amount</label>
        <input
          id="amount"
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>{" "}
      <button>+ ADD</button>
    </form>
  );
}

export default MealForm;
