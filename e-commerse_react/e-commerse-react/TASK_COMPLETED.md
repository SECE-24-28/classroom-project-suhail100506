# E-Commerce React - Express API Integration

## ✅ Task Completion Summary

All three Express tasks have been successfully implemented and integrated with the React frontend:

### Task 1: ✅ Cart API with File Processing
**Location:** `React/Express-Project/routes/cart.js`

Created complete REST API for cart management with file-based storage:
- **GET /cart** - Fetch all cart items from `cart.json`
- **POST /cart** - Add items to cart (auto-merges duplicates)
- **PUT /cart/:id** - Update cart item quantity
- **DELETE /cart/:id** - Remove specific item
- **DELETE /cart** - Clear entire cart

**Data Storage:** `React/Express-Project/data/cart.json`

### Task 2: ✅ Products API Integration with Frontend
**Backend:** `React/Express-Project/routes/product.js`
**Frontend:** `src/App.jsx` - `addProduct()` function

Implementation:
- Admin page form submits to `POST /products`
- New products save to `products.json` with auto-generated ID
- Products listing page fetches from `GET /products`
- Frontend automatically refreshes after adding products
- All product data persists across server restarts

**Data Storage:** `React/Express-Project/data/products.json`

### Task 3: ✅ Cart API Integration with Frontend
**Backend:** `React/Express-Project/routes/cart.js`
**Frontend:** `src/App.jsx` - `addToCart()`, `updateQuantity()`, `removeFromCart()` functions

Implementation:
- Add to cart button sends `POST /cart`
- Quantity updates send `PUT /cart/:id`
- Remove buttons send `DELETE /cart/:id`
- All cart operations update `cart.json` immediately
- Cart state syncs between frontend and backend

**Data Storage:** `React/Express-Project/data/cart.json`

---

## 🚀 How to Run

### 1. Start the Express Backend
```bash
cd React/Express-Project
node server.js
```
Server runs on: `http://localhost:3000`

### 2. Start the React Frontend
```bash
cd e-commerse_react/e-commerse-react
npm run dev
```
Frontend runs on: `http://localhost:5173` (or your Vite config port)

---

## 📋 API Endpoints Reference

### Products API
```javascript
GET    /products        // Get all products
GET    /products/:id    // Get single product
POST   /products        // Add new product
DELETE /products/:id    // Delete product
```

### Cart API
```javascript
GET    /cart           // Get all cart items
POST   /cart           // Add item to cart
PUT    /cart/:id       // Update cart item quantity
DELETE /cart/:id       // Remove item from cart
DELETE /cart           // Clear entire cart
```

---

## 🔧 Code Examples

### Frontend - Fetching Products (useEffect)
```javascript
useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      const data = await response.json();
      if (data && data.length > 0) {
        setProducts(data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  fetchProducts();
}, []);
```

### Frontend - Adding Product
```javascript
const addProduct = async (newProduct) => {
  try {
    const response = await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        name: newProduct.name,
        price: parseFloat(newProduct.sellingPrice),
        description: newProduct.description || "",
        image: newProduct.image || ""
      })
    });
    
    if (response.ok) {
      // Re-fetch products to get updated list
      const productsResponse = await fetch('http://localhost:3000/products');
      const updatedProducts = await productsResponse.json();
      setProducts(updatedProducts);
      alert('Product added successfully!');
    }
  } catch (error) {
    console.error('Error adding product:', error);
  }
};
```

### Frontend - Adding to Cart
```javascript
const addToCart = async (product) => {
  try {
    const response = await fetch('http://localhost:3000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      })
    });
    
    const data = await response.json();
    if (response.ok) {
      setCart(data.cart);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
};
```

---

## 📁 File Structure

```
e-commerse_react/e-commerse-react/
├── src/
│   ├── App.jsx                  # Main app with API integration
│   └── components/
│       ├── AddProduct.jsx       # Admin form (Task 2)
│       ├── ProductsPage.jsx     # Products list (Task 2)
│       ├── Cart.jsx             # Cart page (Task 3)
│       └── Admin.jsx            # Admin page

React/Express-Project/
├── server.js                    # Express server setup
├── routes/
│   ├── product.js              # Products API (Task 2)
│   └── cart.js                 # Cart API (Task 1 & 3)
└── data/
    ├── products.json           # Products data storage
    └── cart.json               # Cart data storage
```

---

## ✨ Features Implemented

✅ **File Processing**: All data operations use Node.js `fs` module  
✅ **Real-time Updates**: Changes immediately reflect in JSON files  
✅ **API Integration**: Frontend communicates with Express backend  
✅ **Error Handling**: Proper error responses and fallbacks  
✅ **CORS Enabled**: Cross-origin requests work seamlessly  
✅ **Persistent Storage**: Data survives server restarts  
✅ **Auto ID Generation**: New items get unique IDs automatically  
✅ **Duplicate Handling**: Cart merges duplicate products  

---

## 🧪 Testing

### Test Products API
```bash
# Get all products
curl http://localhost:3000/products

# Add a product
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Product","price":99.99,"description":"A test"}'
```

### Test Cart API
```bash
# Get cart
curl http://localhost:3000/cart

# Add to cart
curl -X POST http://localhost:3000/cart \
  -H "Content-Type: application/json" \
  -d '{"productId":3,"name":"Headphones","price":199.99,"quantity":1}'

# Update quantity
curl -X PUT http://localhost:3000/cart/1 \
  -H "Content-Type: application/json" \
  -d '{"quantity":3}'

# Remove from cart
curl -X DELETE http://localhost:3000/cart/1
```

---

## 📝 Notes

- Express server must run on port 3000
- React app expects API at `http://localhost:3000`
- All data stored in JSON files (no database required)
- Products update immediately when added via admin page
- Cart updates persist to file on every change
- Frontend has fallback logic if API fails

---

## 🎉 All Tasks Complete!

The e-commerce application now has a fully functional backend with file-based storage and complete frontend integration. You can:

1. ✅ Add products via Admin page → Updates `products.json`
2. ✅ View products on Products page → Reads from `products.json`
3. ✅ Add items to cart → Updates `cart.json`
4. ✅ Manage cart (update/remove) → Updates `cart.json`

All changes persist across server restarts thanks to file processing! 🚀
