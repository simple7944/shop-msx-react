
export async function getAllProducts(params) {

  let url = "/api/shop/products"

  if (params !== "") {
    const urlParams1 = new URLSearchParams(params).toString()
    url += ("?" + urlParams1)
  }
    const response = await fetch(url);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch quotes.');
    }
    const products = [];
  
    for (const product in data) {
      products.push(product);
    }
  
    return data;
  }

  export async function getProduct(productId) {
    const response = await fetch(`/api/shop/product/${productId}`);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch product.');
    }
  
    const loadedProduct = {
      id: productId,
      ...data,
    };
  
    return loadedProduct;
  }

  export async function confirmOrder(carts) {

    const response = await fetch(`/api/shop/sendEmail`, {
      body: JSON.stringify(carts),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: "POST"
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch product.');
    }
  
    return data;
  }