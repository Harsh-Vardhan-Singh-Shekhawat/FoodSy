import React, {useContext} from 'react'
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/CartContext'

const MealItem = (props) => {
  const cartCtxt = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtxt.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    })
  }

  return (
    <React.Fragment>
    <hr />  
    <li className={styles.li}>
      <div>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
      </div>
      <div className={styles.price}>
        <MealItemForm onAddToCart = {addToCartHandler} />
        <br />
        <div className={styles.div}>{props.price}</div>
      </div>
    </li>
    <hr />
    </React.Fragment>
  )
}

export default MealItem
