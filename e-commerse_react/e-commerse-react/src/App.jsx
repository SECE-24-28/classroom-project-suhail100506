import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductsPage from './components/ProductsPage';
import Cart from './components/Cart';
import Login from './components/Login';
import Orders from './components/Orders';
import Admin from './components/Admin';
import ProtectedRoute from './components/ProtectedRoute';
import headphoneImg from "./components/headphone.png";
import standImg from "./components/stand.png";
import mouseImg from "./components/mouse.png";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
      price: 750.00,
      image: headphoneImg,
      category: "Audio"
    },
    {
      id: 2,
      name: "Laptop Stand",
      description: "Ergonomic aluminum laptop stand for better posture",
      price: 450.00,
      image: standImg,
      category: "Accessories"
    },
    {
      id: 3,
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse with adjustable DPI",
      price: 499.00,
      image: mouseImg,
      category: "Accessories"
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      description: "RGB backlit mechanical keyboard with blue switches",
      price: 1299.00,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
      category: "Accessories"
    },
    {
      id: 5,
      name: "4K Monitor",
      description: "27-inch 4K UHD monitor with HDR support",
      price: 3999.00,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
      category: "Electronics"
    },
    {
      id: 7,
      name: "USB Hub",
      description: "7-port USB 3.0 hub with fast charging",
      price: 299.00,
      image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400",
      category: "Accessories"
    },
    {
      id: 8,
      name: "Bluetooth Speaker",
      description: "Portable waterproof Bluetooth speaker with 12-hour battery",
      price: 599.00,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      category: "Audio"
    },
    {
      id: 9,
      name: "Gaming Mouse Pad",
      description: "Extended RGB gaming mouse pad with anti-slip base",
      price: 199.00,
      image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=400",
      category: "Gaming"
    }
  ]);

  const [cart, setCart] = useState([]);

  const addProduct = (newProduct) => {
    const productWithId = {
      ...newProduct,
      id: products.length + 1,
      price: parseFloat(newProduct.sellingPrice),
      image: newProduct.imageUrl
    };
    setProducts([...products, productWithId]);
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar cartCount={cartCount} />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home products={products} onAddToCart={addToCart} />}
            />
            <Route
              path="/products"
              element={<ProductsPage products={products} onAddToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  onUpdateQuantity={updateQuantity}
                  onRemoveItem={removeFromCart}
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute requireAdmin={true}>
                  <Admin onAddProduct={addProduct} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}
export default App