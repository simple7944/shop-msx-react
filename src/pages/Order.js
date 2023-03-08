import OrderProducts from "../components/Order/OrderProducts";
import OrderForm from "../components/Order/OrderForm";
import { getCartItems } from "../helper/LocationStorageHelper";
import { confirmOrder } from "../api/api";
import useHttp from "../hooks/use-http";

import React from "react";

const Order = () => {
  const {
    sendRequest,
    status,
    data: data,
    error,
  } = useHttp(confirmOrder, true);

  const sendConfirmOrder = (email) => {
    const carts = getCartItems();

    let totalPrice = 0;
    for (let cart of carts) {
      totalPrice += cart.price * cart.count;
    }

    let params = {
      email: email,
      items: carts,
      price: totalPrice,
    };
    sendRequest(params);
  };

  return (
    <div>
      <OrderProducts></OrderProducts>
      <OrderForm confirmOrder={sendConfirmOrder}></OrderForm>
    </div>
  );
};

export default Order;
