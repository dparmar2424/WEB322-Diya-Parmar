const fs = require('fs');

class ProductService 
{
  getAllProducts(req, res) 
  {
    const products = JSON.parse(fs.readFileSync('fakeProducts.json', 'utf8'));
    res.json(products);
  }

  getProductById(req, res) 
  {
    const productId = parseInt(req.params.id);
    const products = JSON.parse(fs.readFileSync('fakeProducts.json', 'utf8'));
    const product = products.find(product => product.id === productId);

    if (product) 
      res.json(product);
    else 
      res.status(404).json({ message: 'Product not found' });
  }

  deleteProduct(req, res) 
  {
    const productId = parseInt(req.params.id);
    let products = JSON.parse(fs.readFileSync('fakeProducts.json', 'utf8'));
    products = products.filter(product => product.id !== productId);
    fs.writeFileSync('fakeProducts.json', JSON.stringify(products));
    res.json({ success: true, message: 'Product deleted successfully' });
  }

  addProduct(req, res) 
  {
    const newProduct = req.body;
    newProduct.id = Date.now();
    let products = JSON.parse(fs.readFileSync('fakeProducts.json', 'utf8'));
    products.push(newProduct);
    fs.writeFileSync('fakeProducts.json', JSON.stringify(products));
    res.json(newProduct);
  }
}

module.exports = new ProductService();
