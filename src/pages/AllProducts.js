import { useEffect, useState } from "react";
import ProductList from "../components/Products/ProductList";
import NoProductsFound from "../components/Products/NoProductsFound";
import useHttp from "../hooks/use-http";
import { getAllProducts } from "../api/api";
import classes from "./AllProducts.module.css";
import Filter from "../components/Products/Filter";
import { useParams } from "react-router-dom";

const AllProducts = (props) => {
  const linkParams = useParams();

  const { category } = linkParams;

  const urlParams = new URLSearchParams(window.location.search);
  // let page = urlParams.get("page");
  const [condition, setCondition] = useState(urlParams.get("condition"));

  const {
    sendRequest,
    status,
    data: loadedProducts,
    error,
  } = useHttp(getAllProducts, true);

  const updateCondition = (newCondition) => {
    if (newCondition !== condition) {
      setCondition(newCondition);
    }
  };

  const params = () => {
    let params = {};

    if (condition) {
      if (condition === "used") {
        params.condition = 1;
      } else if (condition === "new") {
        params.condition = 0;
      }
    }

    console.log(category)


    if (category) {
      params.category = category;
    }

    console.log(params);
    return params;
  };

  useEffect(() => {
    sendRequest(params());
    console.log("reelll");
  }, [sendRequest, condition, category]);

  return (
    <div className={classes.container}>
      <div className={classes.filtersContainer}>
        <Filter updateCondition={updateCondition}></Filter>
      </div>
      <ProductList products={loadedProducts} status={status}></ProductList>
    </div>
  );
};

export default AllProducts;
