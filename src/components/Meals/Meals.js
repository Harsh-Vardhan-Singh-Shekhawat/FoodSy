import React from "react";
import styles from "./Meals.module.css";
import AvailableMeals from "./AvailableMeals";
const Meals = () => {
  return (
    <React.Fragment>
      <div className={styles.intro}>
        <h1>Delicious Food, Delivered To You</h1>
        <h3>Choose your favourite meals to get 40% off.</h3>
        <h3>all meals are hygenic and fresh.</h3>
      </div>
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
