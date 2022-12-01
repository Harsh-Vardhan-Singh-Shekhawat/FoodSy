import React, { useState } from 'react';
import styles from './Header.module.css'
import foodImg from '../../images/food.jpg'
import CartButton from './CartButton';
import Modal from '../UI/Modal'

const Header = () => {
  const [openCart,setOpenCart] = useState(false);
  const cartHandler = () =>{
    setOpenCart(true)
  }
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>FoodSy</h1>
        <CartButton cartHandler={cartHandler} />
      </header>
      <div>
        <img className={styles['main-image']} src={foodImg} alt="landing page" />
      </div>
      {openCart && <Modal closeCartHandler={setOpenCart} />}
    </React.Fragment>
  )
}

export default Header
