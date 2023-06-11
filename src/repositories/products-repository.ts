const products = [
  { id: 1, title: "tomato" },
  { id: 2, title: "apple" },
];

export const ProductsRepository = {
  findProducts(title: string | null) {
    if (title) {
      return products.filter((p) => p.title.includes(title));
    } else {
      products;
    }
  },
  createProduct(title: string) {
    const newProduct = {
      id: Number(new Date()),
      title: title,
    };
    products.push(newProduct);
    return newProduct;
  },
  deleteProduct(id: number) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === Number(id)) {
        products.splice(i, 1);
        return true;
      }
    }
    return false;
  },
  productById(id: number) {
    const product = products.find((p) => p.id === id);
    return product;
  },
  updateProduct(id: number, title: string) {
    const product = products.find((p) => p.id === id);
    if (product) {
      product.title = title;
      return true;
    } else {
      return false;
    }
  },
};
