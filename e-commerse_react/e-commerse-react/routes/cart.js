import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
const cartFilePath = path.join(__dirname, '../data/cart.json');

router.get('/', async (req, res) => {
    try {
        const data = await fs.readFile(cartFilePath, 'utf8');
        const cart = JSON.parse(data);
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read cart' });
    }
});

router.post('/', async (req, res) => {
    try {
        const data = await fs.readFile(cartFilePath, 'utf8');
        const cart = JSON.parse(data);

        const { productId, name, price, image, quantity } = req.body;

        const existingItemIndex = cart.findIndex(item => item.productId === productId);

        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += quantity;
        } else {
            cart.push({
                id: Date.now(),
                productId,
                name,
                price,
                image: image || '',
                quantity
            });
        }

        await fs.writeFile(cartFilePath, JSON.stringify(cart, null, 2));
        res.json({ cart });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add to cart' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const data = await fs.readFile(cartFilePath, 'utf8');
        const cart = JSON.parse(data);

        const itemId = parseInt(req.params.id);
        const { quantity } = req.body;

        const itemIndex = cart.findIndex(item => item.id === itemId);

        if (itemIndex !== -1) {
            cart[itemIndex].quantity = quantity;
            await fs.writeFile(cartFilePath, JSON.stringify(cart, null, 2));
            res.json({ cart });
        } else {
            res.status(404).json({ error: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update cart' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const data = await fs.readFile(cartFilePath, 'utf8');
        let cart = JSON.parse(data);

        const itemId = parseInt(req.params.id);

        cart = cart.filter(item => item.id !== itemId);

        await fs.writeFile(cartFilePath, JSON.stringify(cart, null, 2));
        res.json({ cart });
    } catch (error) {
        res.status(500).json({ error: 'Failed to remove from cart' });
    }
});

export default router;
