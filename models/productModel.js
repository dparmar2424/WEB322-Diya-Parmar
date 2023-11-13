const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => 
{
    const products = require('../fakeProducts.json');
    res.json(products);
});

router.get('/:id', (req, res) => 
{
    const productId = parseInt(req.params.id);
    const products = require('../fakeProducts.json');
    const product = products.find(product => product.id === productId);

    if (product) 
    {
        res.json(product);
    } 
    else 
    {
        res.status(404).json({ message: 'Product not found' });
    }
});

router.delete('/:id', (req, res) => 
{
    const productId = parseInt(req.params.id);
    let products = require('../fakeProducts.json');
    products = products.filter(product => product.id !== productId);

    fs.writeFileSync('fakeProducts.json', JSON.stringify(products));

    res.json({ success: true, message: 'Product deleted successfully' });
});

router.post('/', (req, res) => 
{
    const newProduct = req.body;
    newProduct.id = Date.now();
    let products = require('../fakeProducts.json');
    products.push(newProduct);

    fs.writeFileSync('fakeProducts.json', JSON.stringify(products));

    res.json(newProduct);
});

module.exports = router;
