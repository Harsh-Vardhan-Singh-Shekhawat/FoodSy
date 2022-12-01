import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputAmountRef = useRef(null);
  const submitHandler = (event)=>{
    event.preventDefault();
    const enteredAmount = inputAmountRef.current.value; // checked console and it has the object named current.
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5 ){
     setAmountIsValid(false);
     return;
    }
    props.onAddToCart(enteredAmountNumber);
  }

  return (
    <form onSubmit={submitHandler}>
      <label className={styles.label}>quantity</label>
      <input
        ref={inputAmountRef}
        value="amount"
        type="number"
        min="1"
        defaultValue="1"
        max="5"
      />
      <button className={styles.addBtn}>+ Add</button>
      {/* {!amountIsValid && <p>Please enter the valid amount!</p>} */}
    </form>
  );
};

export default MealItemForm;
