import React from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const dummyMeals = [
  {
    id: 1,
    key:1,
    name: "Butter Chicken",
    desc: "Swaad hai ek baar kha ke to dekho",
    price: "₹249",
  },
  {
    id: 2,
    key:2,
    name: "Biryani",
    desc: "Are bhot hi badhiya hai ji",
    price: "₹399",
  },
  {
    id: 3,
    key:3,
    name: "Margherita Pizza",
    desc: "Very Nice",
    price: "₹149",
  },
  {
    id: 4,
    key:4,
    name: "Crispy Chicken Burger",
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
