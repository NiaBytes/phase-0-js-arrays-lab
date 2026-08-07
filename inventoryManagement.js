// Write your code here
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
  console.log(products[0]);
}

function updateProductName(i, name) {
  products[i] = name;
}

function removeLastProduct() {
  products.pop();
}

function addProduct(product) {
  products.push(product);
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== "undefined" ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== "undefined" ? addProduct : undefined,
  updateProductName: typeof updateProductName !== "undefined" ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== "undefined" ? removeLastProduct : undefined,
  products,
};
