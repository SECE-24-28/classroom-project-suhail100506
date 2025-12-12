# E-Commerce API Documentation

## Overview
This Express.js API provides backend functionality for an e-commerce application with file-based data storage using JSON files.

## Setup Instructions

### 1. Install Dependencies
```bash
cd React/Express-Project
npm install
```

### 2. Start the Server
```bash
npm start
# or
node server.js
```

The server will run on `http://localhost:3000`

### 3. Start the React Frontend
```bash
cd e-commerse_react/e-commerse-react
npm install
npm run dev
```

## API Endpoints

### Products API

#### GET /products
Fetch all products from the database.

**Response:**
```json
[
  {
    "id": 3,
    "name": "Headphones",
    "price": 199.99,
    "description": "Noise-cancelling headphones",
    "image": "http://example.com/image.jpg"
  }
]
```

#### GET /products/:id
Fetch a single product by ID.

**Response:**
```json
{
  "id": 3,
  "name": "Headphones",
  "price": 199.99,
  "description": "Noise-cancelling headphones"
}
```

#### POST /products
Add a new product to the database.

**Request Body:**
```json
{
  "name": "New Product",
  "price": 99.99,
  "description": "Product description",
  "image": "http://example.com/image.jpg"
}
```

**Response:**
```json
{
  "message": "Product Created Successfully",
  "product": {
    "id": 6,
    "name": "New Product",
    "price": 99.99,
    "description": "Product description",
    "image": "http://example.com/image.jpg"
  }
}
```

#### DELETE /products/:id
Delete a product by ID.

**Response:**
```json
{
  "message": "Product Deleted Successfully"
}
```

---

### Cart API

#### GET /cart
Fetch all items in the cart.

**Response:**
```json
[
  {
    "id": 1,
    "productId": 3,
    "name": "Headphones",
    "price": 199.99,
    "quantity": 2
  }
]
```

#### POST /cart
Add an item to the cart. If the item already exists, it updates the quantity.

**Request Body:**
```json
{
  "productId": 3,
  "name": "Headphones",
  "price": 199.99,
  "quantity": 1
}
```

**Response:**
```json
{
  "message": "Item added to cart successfully",
  "cart": [
    {
      "id": 1,
      "productId": 3,
      "name": "Headphones",
      "price": 199.99,
      "quantity": 1
    }
  ]
}
```

#### PUT /cart/:id
Update the quantity of a cart item.

**Request Body:**
```json
{
  "quantity": 3
}
```

**Response:**
```json
{
  "message": "Cart item updated successfully",
  "cart": [...]
}
```

#### DELETE /cart/:id
Remove a specific item from the cart.

**Response:**
```json
{
  "message": "Cart item deleted successfully",
  "cart": [...]
}
```

#### DELETE /cart
Clear the entire cart.

**Response:**
```json
{
  "message": "Cart cleared successfully"
}
```

---

## Data Storage

All data is stored in JSON files:
- `data/products.json` - Product information
- `data/cart.json` - Shopping cart items
- `data/blogs.json` - Blog posts

## Features

✅ **File Processing**: All data operations use `fs` module to read/write JSON files  
✅ **CORS Enabled**: Frontend can communicate with the API  
✅ **Error Handling**: Proper error responses for failed operations  
✅ **Real-time Updates**: Frontend fetches latest data from files  
✅ **Automatic ID Generation**: New items get unique IDs automatically  

## Frontend Integration

The React frontend is configured to communicate with the Express API at `http://localhost:3000`. 

### Admin Page
- Add new products via the form
- Products are saved to `products.json`
- Product list automatically updates

### Products Page
- Displays all products from `products.json`
- Add items to cart

### Cart Page
- View cart items from `cart.json`
- Update quantities
- Remove items
- All changes persist to the JSON file

## Testing the API

You can test the API using:
- **Postman**: Import the endpoints and test each route
- **cURL**: Command-line testing
- **Browser**: For GET requests, visit `http://localhost:3000/products` or `http://localhost:3000/cart`

### Example cURL Commands

```bash
# Get all products
curl http://localhost:3000/products

# Add a product
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Product","price":29.99,"description":"A test product"}'

# Add to cart
curl -X POST http://localhost:3000/cart \
  -H "Content-Type: application/json" \
  -d '{"productId":3,"name":"Headphones","price":199.99,"quantity":1}'

# Get cart
curl http://localhost:3000/cart
```

## Notes

- Make sure the Express server is running before starting the React app
- The server must be on port 3000 for the frontend to connect properly
- All file operations are synchronous for simplicity
- Data persists across server restarts
