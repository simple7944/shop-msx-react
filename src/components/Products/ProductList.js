
import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css"

const ProductList = (props) => {
  return (
    <div className={classes.productContainer}>
      {props.products.map((product) => (
        <ProductItem
          product={product}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ProductList;
