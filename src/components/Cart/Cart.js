import React, {useContext} from 'react'
import styles from './Cart.module.css'
import CartContext from '../../store/CartContext'
const Cart = () => {

  const cartCtxt = useContext(CartContext);
  const totalAmount =`₹${cartCtxt.totalAmount.toFixed(2)}`;
  const hasItems = cartCtxt.items.length > 0;
  return (
    <div>
      <div className={styles.list}>
        <ul>
        {cartCtxt.items.map(item => <li>{item.name}</li> )}
        </ul>
      </div>
      <div>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div>
        <button>Close</button>
        {hasItems && <button>Order</button>}
      </div>

    </div>
  )
}

export default Cart
