# E-Commerce Application with MongoDB

A full-stack e-commerce application built with React, Express, and MongoDB.

## Features

- Product listing and management
- Shopping cart functionality
- MongoDB integration with Mongoose
- RESTful API
- Admin product management
- Responsive design with Tailwind CSS

## Tech Stack

### Frontend
- React 19
- React Router
- Axios
- Tailwind CSS
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Prerequisites

Before running this application, make sure you have:

1. **Node.js** (v14 or higher) installed
2. **MongoDB** installed and running locally
   - Download from: https://www.mongodb.com/try/download/community
   - Default connection: `mongodb://localhost:27017`

## Setup Instructions

### 1. Install Dependencies

```bash
cd e-commerse_react/e-commerse-react
npm install
```

### 2. Start MongoDB

Make sure MongoDB is running on your system:

**Windows:**
```bash
# Start MongoDB as a service
net start MongoDB
```

**Mac/Linux:**
```bash
# Using brew (Mac)
brew services start mongodb-community

# Or using systemctl (Linux)
sudo systemctl start mongod
```

### 3. Seed the Database

Populate MongoDB with initial product data:

```bash
npm run seed
```

This will create the `e-commerce` database and add sample products.

### 4. Start the Backend Server

```bash
npm run server
```

Server will run on `http://localhost:3000`

### 5. Start the Frontend Development Server

In a new terminal:

```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## Project Structure

```
e-commerse-react/
├── config/
│   └── db.js              # MongoDB connection configuration
├── models/
│   ├── Product.js         # Product schema
│   └── Cart.js            # Cart item schema
├── routes/
│   ├── products.js        # Product API routes
│   └── cart.js            # Cart API routes
├── src/
│   ├── components/        # React components
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── seed.js               # Database seeding script
└── server.js             # Express server
```

## API Endpoints

### Products
- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID
- `POST /products` - Create new product
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product

### Cart
- `GET /cart` - Get all cart items
- `POST /cart` - Add item to cart
- `POST /cart/:id` - Update cart item quantity
- `DELETE /cart/:id` - Remove item from cart
- `DELETE /cart` - Clear entire cart

## Database Schema

### Product Schema
```javascript
{
  name: String (required),
  price: Number (required),
  description: String,
  image: String,
  category: String,
  stock: Number,
  timestamps: true
}
```

### Cart Item Schema
```javascript
{
  productId: ObjectId (ref: Product),
  name: String (required),
  price: Number (required),
  image: String,
  quantity: Number (required),
  timestamps: true
}
```

## Database Configuration

The database name is set to `e-commerce` in `config/db.js`.

Connection string: `mongodb://localhost:27017/e-commerce`

To change the database name or connection, edit the `config/db.js` file.

## Troubleshooting

### MongoDB Connection Issues

If you get a connection error:

1. Verify MongoDB is running:
   ```bash
   # Check MongoDB status
   mongosh
   ```

2. Check if port 27017 is available:
   ```bash
   netstat -an | findstr :27017
   ```

3. Ensure MongoDB service is started

### Port Already in Use

If port 3000 or 5173 is already in use:

- Change the PORT in `server.js` for backend
- Vite will automatically suggest an alternative port for frontend

## Features to Implement

- [ ] User authentication
- [ ] Order management
- [ ] Payment integration
- [ ] Product reviews and ratings
- [ ] Search and filter functionality
- [ ] Order history

## License

MIT
