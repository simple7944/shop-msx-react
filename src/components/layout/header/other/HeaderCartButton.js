import { useContext, useEffect, useState } from 'react';

import CartIcon from '../../../Icons/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../../Cart/context/cart-context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const btnClasses = `${classes.button} ${true ? classes.bump : ''}`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>{cartCtx.count}</span>
    </button>
  );
};

export default HeaderCartButton;
