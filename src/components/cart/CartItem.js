import classes from "./CartItem.module.css";
import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon";
import { Link } from "react-router-dom";
import Condition from "../UI/others/Condition";

const CartItem = (props) => {
  const plusQuantityCart = () => {
    props.addQuantityCart(props.cart, 1);
  };

  const minusQuantityCart = () => {
    props.addQuantityCart(props.cart, -1);
  };

  return (
    <div className={classes.container}>
      <Link to={`/product/${props.cart._id}`} onClick={props.dismissAction}>
        <img className={classes.mainImage} src={props.cart.images[0]} alt="" />
      </Link>
      <div>
        <Link to={`/product/${props.cart._id}`} onClick={props.dismissAction}>
          <div className={classes.titleContainer}>
            <p className={classes.title}>{props.cart.name}</p>
            <div className={classes.condition} >
            <Condition condition={props.cart.conditionType}></Condition>
            </div>
          </div>
        </Link>
        <p className={classes.price}>{props.cart.price} грн</p>
      </div>
      <div className={classes.filler}></div>
      <div className={classes.cartNumber}>
        <button className={classes.addButton} onClick={minusQuantityCart}>
          <MinusIcon />
        </button>
        <p className={classes.cartNumberText}>{props.cart.count}</p>
        {props.cart.conditionType == 0 && (
          <button className={classes.addButton} onClick={plusQuantityCart}>
            <PlusIcon />
          </button>
        )}

        {props.cart.conditionType != 0 && (
          <div className={classes.disabledView}></div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
