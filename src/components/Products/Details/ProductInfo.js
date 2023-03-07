import classes from "./ProductInfo.module.css";
import Condition from "../../UI/others/Condition";

const ProductInfo = (props) => {
  return (
    <div className={classes.productInfo}>
      <p className={classes.title}>{props.product.name}</p>
      <div className={classes.status}>
        <p className={classes.code}>Код товару: {props.product.code}</p>
        <div className={classes.condition}>
          <Condition condition={props.product.conditionType} />
        </div>
      </div>
      <p className={classes.price}>{props.product.price} грн</p>
      <button className={classes.buyButton} onClick={props.buyAction}>
        Купить
      </button>
      <p className={classes.description}>{props.product.description}</p>
    </div>
  );
};

export default ProductInfo;
