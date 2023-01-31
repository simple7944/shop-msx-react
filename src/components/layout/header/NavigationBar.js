import classes from "./NavigationBar.module.css";
import { Fragment } from "react";
import HeaderCartButton from "./other/HeaderCartButton";
import CategoriesButton from "./other/CategoriesButton";
import { Link } from "react-router-dom";

const NavigationBar = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.leftHeader}>
          <Link to={`/`}>
            <div className={classes.title}>
              <div>
                <img className={classes.icon} src="/logo.png" alt="logo" />
              </div>
              <div>
                <h2>Trackly Trakcer</h2>
                <p className="subTitle">Магазин компютерной техники</p>
              </div>
            </div>
          </Link>
          <CategoriesButton />
        </div>
        <Link to={`/cart`}>
          <HeaderCartButton/>
        </Link>
      </header>
    </Fragment>
  );
};

export default NavigationBar;
