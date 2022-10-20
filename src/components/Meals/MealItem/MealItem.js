import React from 'react'
import styles from './MealItem.module.css'
const MealItem = (props) => {
  return (
    <React.Fragment>
    <hr />  
    <li className={styles.li}>
      <div>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
      </div>
      <div className={styles.price}>
        <button className={styles.addBtn}>+ Add</button>
        <br />
        <div className={styles.div}>{props.price}</div>
      </div>
    </li>
    <hr />
    </React.Fragment>
  )
}

export default MealItem
