import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import styles from './CartButton.module.css'

const CartButton = () => {
  return (
    <button className={styles.cartButton}>
        <span><FaShoppingCart /></span>
        <span>Cart</span>
        <span className={styles.price}>₹395</span>

    </button>
  )
}

export default CartButton
