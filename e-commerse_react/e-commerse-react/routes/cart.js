const express = require('express');
const router = express.Router();
const CartItem = require('../models/Cart');
const fs = require('fs');

// Get all cart items
router.get("/", async (req, res) => {
    try {
        const cart = await CartItem.find().populate('productId');
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cart', message: error.message });
    }
});

// Add item to cart
router.post("/", async (req, res) => {
    try {
        const { productId, name, price, image, quantity } = req.body;

        const existingItem = await CartItem.findOne({ productId });

        if (existingItem) {
            existingItem.quantity += quantity;
            await existingItem.save();
        } else {
            const newItem = new CartItem({
                productId,
                name,
                price,
                image,
                quantity
            });
            await newItem.save();
        }

        const cart = await CartItem.find();
        
        // Save to cart.json
        fs.writeFileSync("data/cart.json", JSON.stringify(cart, null, 2));
        
        res.status(200).json({ cart });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add to cart', message: error.message });
    }
});

// Update cart item quantity
router.post("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;

        const cartItem = await CartItem.findById(id);

        if (cartItem) {
            cartItem.quantity = quantity;
            await cartItem.save();
            const cart = await CartItem.find();
            
            // Save to cart.json
            fs.writeFileSync("data/cart.json", JSON.stringify(cart, null, 2));
            
            res.status(200).json({ cart });
        } else {
            res.status(404).json({ message: "Item not found" });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update cart', message: error.message });
    }
});

// Remove item from cart
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await CartItem.findByIdAndDelete(id);

        const cart = await CartItem.find();
        
        // Save to cart.json
        fs.writeFileSync("data/cart.json", JSON.stringify(cart, null, 2));
        
        res.status(200).json({ cart });
    } catch (error) {
        res.status(500).json({ error: 'Failed to remove from cart', message: error.message });
    }
});

// Clear entire cart
router.delete("/", async (req, res) => {
    try {
        await CartItem.deleteMany({});
        
        // Save to cart.json
        fs.writeFileSync("data/cart.json", JSON.stringify([], null, 2));
        
        res.status(200).json({ message: 'Cart Cleared Successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to clear cart', message: error.message });
    }
});

module.exports = router;