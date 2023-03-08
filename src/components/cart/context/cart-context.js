import React from 'react';

const CartContext = React.createContext({
  count: 0,
  addItem: (item) => {},
  clear: () => {}
});

export default CartContext;