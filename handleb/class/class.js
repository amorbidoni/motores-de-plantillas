class Products {
  constructor() {
    this.products = [];
    this.productId = 0;
  }

  get getAllProducts() {
    try {
      return this.products;
    } catch (error) {
      throw new Error(`Error en la peticion getAllProducts ${error}`);
    }
  }

  getProductById(productId) {
    try {
      return this.products.find(
        (product) => product.productId == parseInt(productId)
      );
    } catch (error) {
      throw new Error(`Error en la peticion getProductById ${error}`);
    }
  }

  addNewProduct({ title, price, url }) {
    try {
      this.productId++;
      let newProduct = {
        title: title,
        price: price,
        thumbnail: url,
        id: this.productId,
      };
      this.products.push(newProduct);
      console.log(this.products);
      return newProduct;
    } catch (error) {
      throw new Error(`Error en la peticion addNewProduct ${error}`);
    }
  }
}

module.exports = Products;
