import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";
import {getQuantity} from "./../../../helper/LocationStorageHelper"

import CartContext from "./cart-context";
  
  const CartProvider = (props) => {
    const [cartCount, setCartCount] = useState(getQuantity());

    const addItemHandler = (items) => {
      setCartCount(cartCount + items)
    };

    const clearHandler = () => {
      setCartCount(0)
    };


    const cartContext = {
      count: cartCount,
      addItem: addItemHandler,
      clear: clearHandler
    };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
