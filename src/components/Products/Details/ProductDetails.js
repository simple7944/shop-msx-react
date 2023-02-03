import classes from "./ProductDetails.module.css";
import ProductPhotos from "./Photo/ProductPhotos";
import { Fragment } from "react";
import ProductInfo from "./ProductInfo";

const ProductDetails = (props) => {

  const buyProduct = () => {
    let product = props.product
    product.count = 1
    localStorage.setItem("cart", JSON.stringify(product));
    //убрать ненужные поля
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
