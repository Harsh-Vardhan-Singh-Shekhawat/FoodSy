import React from 'react';
import styles from './Header.module.css'
import foodImg from '../../images/food.jpg'
import CartButton from './CartButton';

const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>FoodSy</h1>
        <CartButton />
      </header>
      <div>
        <img className={styles['main-image']} src={foodImg} alt="landing page" />
      </div>
    </React.Fragment>
  )
}

export default Header
