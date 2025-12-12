import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.js';
import cartRouter from './routes/cart.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/products', productsRouter);
app.use('/cart', cartRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
