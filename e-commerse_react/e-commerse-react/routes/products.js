import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
const productsFilePath = path.join(__dirname, '../data/products.json');

// GET all products
router.get('/', async (req, res) => {
    try {
        const data = await fs.readFile(productsFilePath, 'utf8');
        const products = JSON.parse(data);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read products' });
    }
});

// POST new product
router.post('/', async (req, res) => {
    try {
        const data = await fs.readFile(productsFilePath, 'utf8');
        const products = JSON.parse(data);

        const newProduct = {
            id: Date.now(),
            name: req.body.name,
            description: req.body.description || '',
            price: parseFloat(req.body.price),
            image: req.body.image || '',
            category: req.body.category || 'Other'
        };

        products.push(newProduct);

        await fs.writeFile(productsFilePath, JSON.stringify(products, null, 2));
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add product' });
    }
});

export default router;
