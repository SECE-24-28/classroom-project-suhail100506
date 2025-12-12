const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productsRouter = require('./routes/products.js');
const cartRouter = require('./routes/cart.js');

const app = express();
const PORT = 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/products', productsRouter);
app.use('/cart', cartRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
