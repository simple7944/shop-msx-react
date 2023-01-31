import ProductDetails from "../components/Products/Details/ProductDetails";

import { useEffect } from "react";
import { useParams, useRouteMatch } from "react-router-dom";

import useHttp from "../hooks/use-http";
import { getProduct } from "../api/api";

const Product = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { productId } = params;

  const {
    sendRequest,
    status,
    data: loadedProduct,
    error,
  } = useHttp(getProduct, true);

  useEffect(() => {
    sendRequest(productId);
  }, [sendRequest, productId]);

  if (!loadedProduct) {
    return(<div></div>)
  }

  return <ProductDetails product={loadedProduct}></ProductDetails>;
};

export default Product;
