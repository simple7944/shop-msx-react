import classes from "./OrderProducts.module.css";
import { setCartItems, getCartItems } from "../../helper/LocationStorageHelper";
import CartContext from "../Cart/context/cart-context";
import { useState, useContext } from "react";
import CartItem from "../Cart/CartItem";

const OrderProducts = () => {
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
    <div className={classes.container}>
        <span className={classes.title}>Корзина</span>
      <div key="cart-list" className={classes.cartItems}>
        {carts.map((cart) => (
          <CartItem
            addQuantityCart={addQuantityCart}
            cart={cart}
            key={cart._id}
          />
        ))}
      </div>

      <p className={classes.price}>Общая стоимость: {totalPrice} грн</p>
    </div>
  );
};

export default OrderProducts;
