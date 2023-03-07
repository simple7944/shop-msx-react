import classes from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartIcon from "../Icons/CartIcon";
import CartContext from "../Cart/context/cart-context";
import { setCartItems } from "../../helper/LocationStorageHelper";
import Condition from "../UI/others/Condition";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const buyProduct = () => {
    let product = props.product;
    console.log(product);
    if (setCartItems(product, 1)) {
      cartCtx.addItem(1);
    }
  };

  return (
    <div className={classes.productItem}>
      <Link to={`/product/${props.product._id}`}>
        <img
          className={classes.mainImage}
          src={props.product.images[0]}
          alt=""
        />

        <p className={classes.title}>
          {props.product.name + props.product.name + props.product.name}
        </p>
      </Link>
      <div className={classes.buyContainer}>
        <Condition condition={props.product.conditionType} />
        <div></div>
      </div>
      <div className={classes.buyContainer}>
        <p className={classes.price}>{props.product.price} грн</p>
        <button className={classes.buyButton} onClick={buyProduct}>
          <CartIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
