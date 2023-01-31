import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";

const ProductList = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.filtersContainer}></div>
      <div className={classes.productsContainer}>
        {props.products.map((product) => (
          <ProductItem product={product} key={product.code} />
        ))}
         {props.products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
