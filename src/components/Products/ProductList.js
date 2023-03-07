import ProductItem from "./ProductItem";
import Filter from "./Filter";
import classes from "./ProductList.module.css";
import NoProductsFound from "./NoProductsFound";

const ProductList = (props) => {

  if (props.status === "pending") {
    return;
  }

  if (
    props.status === "completed" &&
    (!props.products || props.products .length === 0)
  ) {
    return <NoProductsFound />;
  }
  

  return (
    <div className={classes.productsContainer}>
      {props.products.map((product) => (
        <ProductItem product={product} key={product.code} />
      ))}
    </div>
  );
};

export default ProductList;
