import React from 'react';

const CartContext = React.createContext({
  count: 0,
  addItem: (item) => {}
});

export default CartContext;