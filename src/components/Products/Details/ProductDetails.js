import classes from "./ProductDetails.module.css";
import ProductPhotos from "./Photo/ProductPhotos";
import { Fragment, useContext } from "react";
import ProductInfo from "./ProductInfo";
import CartContext from "../../Cart/context/cart-context";
import {setCartItems} from "../../../helper/LocationStorageHelper";

const ProductDetails = (props) => {

  const cartCtx = useContext(CartContext);

  const buyProduct = () => {
    let product = props.product
    if (setCartItems(product, 1)) {
      cartCtx.addItem(1)
    }
  };

  return (
    <Fragment>
      <div className={classes.topContainer}>
        <ProductPhotos product={props.product}></ProductPhotos>
        <ProductInfo product={props.product} buyAction={buyProduct}></ProductInfo>
      </div>
      <div className={classes.description}></div>
    </Fragment>
  );
};

export default ProductDetails;
