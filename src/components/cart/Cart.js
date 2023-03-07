import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CloseIcon from "../Icons/CloseIcon";
import CartItem from "./CartItem";
import { getCartItems, setCartItems } from "../../helper/LocationStorageHelper";
import CartContext from "../Cart/context/cart-context";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const [carts, setCarts] = useState(getCartItems());
  const cartCtx = useContext(CartContext);

  const addQuantityCart = (product, quantity) => {
    if (setCartItems(product, quantity)) {
      setCarts(getCartItems());
      cartCtx.addItem(quantity);
    }
  };

  let totalPrice = 0;
  for (let cart of carts) {
    totalPrice += cart.price * cart.count;
  }

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.header}>
        <p className={classes.title}>Корзина</p>
        <button className={classes.closeButton} onClick={props.onClose}>
          <CloseIcon />
        </button>
      </div>

      <div key="cart-list" className={classes.cartItems}>
        {carts.map((cart) => (
          <CartItem
            dismissAction={props.onClose}
            addQuantityCart={addQuantityCart}
            cart={cart}
            key={cart._id}
          />
        ))}
      </div>
      {totalPrice > 0 && (
        <div className={classes.footer}>
          <p className={classes.price}>{totalPrice} грн</p>
          <div className={classes.actions}>
            <button className={classes.continueButton} onClick={props.onClose}>
              Продолжить покупки
            </button>
            <Link to={`/order`}>
              <button className={classes.orderButton} onClick={props.onClose}>
                Оформить заказ
              </button>
            </Link>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
