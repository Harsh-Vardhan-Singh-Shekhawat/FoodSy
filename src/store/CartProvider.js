import React,{useReducer} from 'react'
import CartContext from './CartContext'
const initialCartState = {
  items:[],
  totalAmount:0
};
const cartReducer = (state,action) =>{
  if(action.type === 'ADD'){
    const updatedItems = state.item.concat(action.item);
    const updatedTotalAmount = state.totalAmount + (action.items * action.price);
    return {
      items : {updatedItems},
      totalAmount : {updatedTotalAmount}
    }; 
    return initialCartState;
  }  
}

const CartProvider = (props) => {

  const [cartState,dispatchCartAction] = useReducer(cartReducer, initialCartState)

    const addItemToCart = (item) =>{
      dispatchCartAction({type:'ADD', item:item})
    }
    const removeItemFromCart = (id)=>{
      dispatchCartAction({type:'REMOVE', id:id})
    }

    const cartContext = {
        items:[],
        totalAmount:0,
        addItem:addItemToCart,
        removeItem: removeItemFromCart
    }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
