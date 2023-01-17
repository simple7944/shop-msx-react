
import classes from "./ProductItem.module.css"

const ProductItem = (props) => {
    return (
      <div className={classes.productItem}>
       {props.product.name}
      </div>
    );
  };
  
  export default ProductItem;