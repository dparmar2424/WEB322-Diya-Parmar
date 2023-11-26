const { Order, User, Product } = require('../models');

class ProductsService {
  static async getAllProducts() {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Internal Server Error");
    }
  }

  static async getProductById(id) {
    try {
      const product = await Product.findByPk(id);
      return product;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw new Error("Internal Server Error");
    }
  }

  static async createProduct(productData) {
    try {
      const newProduct = await Product.create(productData);
      return newProduct;
    } catch (error) {
      console.error("Error creating product:", error);
      throw new Error("Internal Server Error");
    }
  }

  static async updateProduct(id, productData) {
    try {
      const [rowsUpdated, [updatedProduct]] = await Product.update(productData, {
        where: { id },
        returning: true,
      });

      if (rowsUpdated === 0) {
        throw new Error("Product not found");
      }

      return updatedProduct;
    } catch (error) {
      console.error("Error updating product:", error);
      throw new Error("Internal Server Error");
    }
  }

  static async deleteProductById(id) {
    try {
      const deletedProduct = await Product.destroy({
        where: { id },
      });

      if (!deletedProduct) {
        throw new Error("Product not found");
      }

      return { success: true };
    } catch (error) {
      console.error("Error deleting product:", error);
      throw new Error("Internal Server Error");
    }
  }
}

module.exports = ProductsService;
