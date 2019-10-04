export const setCategory = a => {
  const categoryArray = JSON.parse(localStorage.getItem("categories")) || [];
  if (categoryArray.includes(a)) {
    localStorage.setItem("categories", JSON.stringify(categoryArray));
  } else {
    categoryArray.push(a);
    localStorage.setItem("categories", JSON.stringify(categoryArray));
  }
};

export const setProduct = a => {
  const ProductArray = JSON.parse(localStorage.getItem("products")) || [];
  const findProduct = ProductArray.findIndex(
    item =>
      item.productName === a.productName && item.categoryName === a.categoryName && item.price === a.price
  );
  if (findProduct !== -1) {
    let newStock = Number(ProductArray[findProduct].stock);
    ProductArray[findProduct].stock = newStock + Number(a.stock);
    localStorage.setItem("products", JSON.stringify(ProductArray));
  } else {
    ProductArray.push(a);
    localStorage.setItem("products", JSON.stringify(ProductArray));
  }
};

export const setOrders = a => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(a);
  localStorage.setItem("orders", JSON.stringify(orders));
};

export const getOrders = () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  console.log(orders);
};
