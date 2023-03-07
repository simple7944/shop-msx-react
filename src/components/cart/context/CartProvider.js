import { useState } from "react";
import {getQuantity} from "./../../../helper/LocationStorageHelper"

import CartContext from "./cart-context";
  
  const CartProvider = (props) => {
    const [cartCount, setCartCount] = useState(getQuantity());

    const addItemHandler = (items) => {
      setCartCount(cartCount + items)
    };

    const cartContext = {
      count: cartCount,
      addItem: addItemHandler
    };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
