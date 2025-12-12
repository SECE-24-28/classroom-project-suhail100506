const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get("/", (req, res) => {
    const products = fs.readFileSync("data/products.json");
    res.json(JSON.parse(products));
});
router.get("/:id", (req, res) => {
    const products = JSON.parse(fs.readFileSync("data/products.json")).products;
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ error: 'Product Not Found' });
    }
}); 

router.post("/", (req, res) => {
    const products = JSON.parse(fs.readFileSync("data/products.json"));
    const newProduct = {
        id: products[products.length - 1].id + 1,
        name: req.body.name,
        price: req.body.price,
    }
    fs.writeFileSync("data/products.json", JSON.stringify(updatedProducts, null, 2));
    res.status(201).json({ message: "Product Created Successfully" });
});

router.delete("/:id", (req, res) => {
    const products = fs.readFileSync("data/products.json");
    const updatedProducts = JSON.parse(products).filter((p) => {
        return p.id !== parseInt(req.params.id);
    })
    fs.writeFileSync("data/products.json", JSON.stringify(updatedProducts, null, 2));
    res.status(200).json({ message: 'Product Deleted Successfully' });
});
module.exports = router;