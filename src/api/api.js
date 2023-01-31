export async function getAllProducts() {
    const response = await fetch(`/api/shop/products`);
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