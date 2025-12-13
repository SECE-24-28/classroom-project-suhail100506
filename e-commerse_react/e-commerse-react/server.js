require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productsRouter = require('./routes/products.js');
const cartRouter = require('./routes/cart.js');
const authRouter = require('./routes/auth.js');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

// Public routes
app.use('/auth', authRouter);

// Protected routes - require authentication
app.use('/products', authMiddleware, productsRouter);
app.use('/cart', authMiddleware, cartRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
