import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CloseIcon from "../Icons/CloseIcon";

// import CartItem from './CartItem';
// import CartContext from '../../store/cart-context';
// import Checkout from './Checkout';

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.header}>
        <p className={classes.title}>Корзина</p>
        <button className={classes.closeButton} onClick={props.onClose}>
          <CloseIcon />
        </button>
      </div>

      <div className={classes.cartItems}>ittems</div>

      <div className={classes.footer}>
        <p className={classes.price}>58654 грн</p>
        <div className={classes.actions}>
          <button className={classes.continueButton} onClick={props.onClose}>Продолжить покупки</button>
          <button className={classes.orderButton} onClick={props.onClose}>Оформить заказ</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
