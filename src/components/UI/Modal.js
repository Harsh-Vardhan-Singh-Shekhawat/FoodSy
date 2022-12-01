import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
const Modal = (props) => {

  const closeCart = () =>{
    props.closeCartHandler(false)
  }

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={styles["model-bgc"]}>
          <div className={styles.model}>
            <button onClick={closeCart} className={styles["exit-btn"]}>X</button>
            <div className={styles['modal-container']}>
              <h2>List Item</h2>
              <h1>Total Amount</h1>
              
            </div>
            <div className={styles['btn-container']}>
              <button className={styles['modal-btn-order']}>Order</button>
              <button onClick={closeCart} className={styles['modal-btn-close']}>Close</button>
            </div>
          </div>
        </div>,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default Modal;
