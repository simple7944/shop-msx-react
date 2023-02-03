import classes from "./CartItem.module.css";
import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon";

const CartItem = (props) => {
  return (
    <div className={classes.container}>
      <img className={classes.mainImage} src={props.cart.images[0]} alt="" />
      <div>
        <p className={classes.title}>
          {props.cart.name + props.cart.name + props.cart.name}
        </p>
        <p className={classes.price}>{props.cart.price} грн</p>
      </div>

      <div className={classes.cartNumber}>
        <button className={classes.addButton}>
          <MinusIcon />
        </button>
        <p>3</p>
        <button className={classes.addButton}>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
