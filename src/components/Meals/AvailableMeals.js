import React from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const dummyMeals = [
  {
    id: 1,
    name: "Butter Chicken",
    desc: "finest fish",
    price: "₹249",
  },
  {
    id: 2,
    name: "Biryani",
    desc: "nice",
    price: "₹399",
  },
  {
    id: 3,
    name: "Margherita",
    desc: "Very Nice",
    price: "₹149",
  },
  {
    id: 4,
    name: "Crispy Chicken",
    desc: "very Very nice",
    price: "₹199",
  },
];

const AvailableMeals = () => {
  return (
    <section>
      <Card>
        <ul className={styles.ul}>
          {dummyMeals.map((meal) => 
          <MealItem 
          name={meal.name} 
          desc={meal.desc} 
          price={meal.price}

          />)}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
