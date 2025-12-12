const express = require('express');
const fs = require('fs');
const router = express.Router();


router.get("/", (req, res) => {
    try {
        const cart = fs.readFileSync("data/cart.json");
        res.json(JSON.parse(cart));
    } catch (error) {
        res.status(500).json({ error: 'Error reading cart data' });
    }
});

router.post("/", (req, res) => {
    try {
        const cart = JSON.parse(fs.readFileSync("data/cart.json"));
        const { productId, name, price, quantity = 1 } = req.body;

        const existingItemIndex = cart.findIndex(item => item.productId === productId);

        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += quantity;
        } else {
            const newItem = {
                id: cart.length > 0 ? cart[cart.length - 1].id + 1 : 1,
                productId,
                name,
                price,
                quantity
            };
            cart.push(newItem);
        }

        fs.writeFileSync("data/cart.json", JSON.stringify(cart, null, 2));
        res.status(201).json({ message: "Item added to cart successfully", cart });
    } catch (error) {
        res.status(500).json({ error: 'Error adding item to cart' });
    }
});

router.put("/:id", (req, res) => {
    try {
        const cart = JSON.parse(fs.readFileSync("data/cart.json"));
        const itemId = parseInt(req.params.id);
        const { quantity } = req.body;

        const itemIndex = cart.findIndex(item => item.id === itemId);

        if (itemIndex !== -1) {
            cart[itemIndex].quantity = quantity;
            fs.writeFileSync("data/cart.json", JSON.stringify(cart, null, 2));
            res.json({ message: "Cart item updated successfully", cart });
        } else {
            res.status(404).json({ error: 'Cart item not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating cart item' });
    }
});

router.delete("/:id", (req, res) => {
    try {
        const cart = JSON.parse(fs.readFileSync("data/cart.json"));
        const itemId = parseInt(req.params.id);

        const updatedCart = cart.filter(item => item.id !== itemId);

        if (cart.length === updatedCart.length) {
            res.status(404).json({ error: 'Cart item not found' });
        } else {
            fs.writeFileSync("data/cart.json", JSON.stringify(updatedCart, null, 2));
            res.json({ message: 'Cart item deleted successfully', cart: updatedCart });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting cart item' });
    }
});

router.delete("/", (req, res) => {
    try {
        fs.writeFileSync("data/cart.json", JSON.stringify([], null, 2));
        res.json({ message: 'Cart cleared successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error clearing cart' });
    }
});

module.exports = router;
