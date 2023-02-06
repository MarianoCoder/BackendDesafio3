import fs from "fs";

class ProductManager {
  constructor(path) {
    this.products = [];
    this.path = path;
  }
  addProduct(id, title, description, price, thumbnail, code, stock) {
    const checkArray = this.products.some((product) => product.code === code);
    if (
      /*checkAcheck === false &&*/
      title &&
      description &&
      price &&
      thumbnail &&
      stock
    ) {
      this.products.push({
        id: id,
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock,
      });
      fs.writeFileSync(this.path, JSON.stringify(this.products));
      return "Producto agregado";
    } else {
      return "Producto repetido o faltan características";
    }
  }
  getProducts() {
    return this.products;
  }

  getProductById(id) {
    this.id;
    const productFound = this.products.find((product) => product.id === id);
    if (productFound) {
      return productFound;
    } else {
      return "Not found";
    }
  }
  updateProduct(id, title, description, price, thumbnail, code, stock) {
    this.id;
    const indexFound = this.products.findIndex((product) => product.id === id);
    if (indexFound !== -1) {
      this.products[indexFound] = {
        id: id,
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock,
      };
      fs.writeFileSync(this.path, JSON.stringify(this.products));
      return "Producto actualizado";
    } else {
      return "Not found";
    }
  }
  deleteProduct(id) {
    this.id;
    const indexFound = this.products.findIndex((product) => product.id === id);
    if (indexFound !== -1) {
      this.products.splice(indexFound, indexFound + 1);
      fs.writeFileSync(this.path, JSON.stringify(this.products));
      return "Producto eliminado";
    } else {
      return "Not found";
    }
  }
}

const productManager = new ProductManager("./products.json");
console.log(productManager.getProducts());
console.log(
  productManager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
  )
);
console.log(productManager.getProducts());
console.log(
  productManager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
  )
);
console.log(
  productManager.getProductById("acef87cc-b087-49e3-9864-18e8dc7c5bdc")
);
console.log(productManager.getProductById(1));
console.log(
  productManager.updateProduct(
    "acef87cc-b087-49e3-9864-18e8dc7c5bdc",
    "producto prueba actualizado",
    "Este es un producto prueba actualizado",
    200,
    "Sin imagen",
    "abc123",
    250
  )
);
console.log(
  productManager.deleteProduct("acef87cc-b087-49e3-9864-18e8dc7c5bdc")
);
