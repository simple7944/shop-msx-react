import { useEffect, useState } from "react";
import ProductList from "../components/Products/ProductList";
import NoProductsFound from "../components/Products/NoProductsFound";
import useHttp from '../hooks/use-http';
import { getAllProducts } from "../api/api";

const AllProducts = () => {
  const { sendRequest, status, data: loadedProducts, error } = useHttp(
    getAllProducts,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return 
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (status === 'completed' && (!loadedProducts || loadedProducts.length === 0))  {
    return <NoProductsFound />;
  }
  
  
console.log(loadedProducts)
 

  return (
    <div>
      <ProductList products={loadedProducts}></ProductList>
    </div>
  );
};

export default AllProducts;
