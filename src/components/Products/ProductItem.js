import classes from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import CartIcon from "../cart/CartIcon";

const ProductItem = (props) => {
  console.log(props.product)
  return (
    <div className={classes.productItem}>
      <Link to={`/product/${props.product._id}`}>
        <img
          className={classes.mainImage}
          src={props.product.images[0]}
          alt=""
        />

        <p className={classes.title}>{props.product.name + props.product.name + props.product.name}</p>
      </Link>
      <div className={classes.buyContainer}>
        <p className={classes.price}>{props.product.price} грн</p>
        <button className={classes.buyButton}>
          <CartIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
