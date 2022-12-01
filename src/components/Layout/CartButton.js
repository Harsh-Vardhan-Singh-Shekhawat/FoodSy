import React,{useContext} from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import styles from './CartButton.module.css'
import CartContext from '../../store/CartContext';
const CartButton = (props) => {
  const cartCtxt = useContext(CartContext);
  
  const numberOfItems = cartCtxt.items.reduce((curNumber,item) =>{
    return curNumber + item.amount;
  },0)

  return (
    <button onClick={props.cartHandler} className={styles.cartButton}>
        <span><FaShoppingCart /></span>
        <span>Cart</span>
        <span className={styles.price}>{numberOfItems}</span>
    </button>
  )
}

export default CartButton
