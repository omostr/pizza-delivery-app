import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item, amount) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
