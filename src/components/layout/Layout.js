import { Fragment, useState } from "react";

import classes from "./Layout.module.css";
import NavigationBar from "./header/NavigationBar";
import Cart from "../Cart/Cart";
import CartProvider from "../Cart/context/CartProvider";

const Layout = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <NavigationBar openCartAction={showCartHandler}/>
        <main className={classes.main}>{props.children}</main>
      </CartProvider>
    </Fragment>
  );
};

export default Layout;
