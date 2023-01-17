export async function getAllProducts() {
    const response = await fetch(`/api/admin/products`);
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