export function getCartItems() {
  let storageItems = localStorage.getItem("cart");
  if (storageItems) {
    return JSON.parse(storageItems);
  }
  return [];
}

export function getQuantity() {
  const carts = getCartItems();
  let count = 0;
  for (let cart of carts) {
    count += cart.count;
  }
  return count;
}

export function setCartItems(product, quantity) {
    console.log(product)
  const fields = ["_id", "name", "price", "count", "images", "conditionType"];

  let carts = getCartItems();
  const index = carts.findIndex((object) => {
    return object._id === product._id;
  });

  if (index >= 0) {
    let newValue = carts[index].count + quantity;

    if (product.conditionType > 0 && newValue > 1) {
      return false;
    }

    if (newValue < 1) {
      carts.splice(index, 1);
    } else {
      carts[index].count += quantity;
    }
  } else {
    if (quantity > 0) {
      product.count = quantity;
      carts = [...carts, product];
    }
  }

  let json = JSON.stringify(carts, fields);
  localStorage.setItem("cart", json);
  return true
}
