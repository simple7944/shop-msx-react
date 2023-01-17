import classes from "./NavigationBar.module.css";
import { Fragment } from "react";
import HeaderCartButton from "./other/HeaderCartButton";
import CategoriesButton from "./other/CategoriesButton";

const NavigationBar = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.leftHeader}>
          <div className={classes.title}>
            <div>
              <img className={classes.icon} src="logo.png" alt="logo" />
            </div>
            <div>
              <h2>Trackly Trakcer</h2>
              <p>Магазин компютерной техники</p>
            </div>
          </div>
          <CategoriesButton />
        </div>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default NavigationBar;
