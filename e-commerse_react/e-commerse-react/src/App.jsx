import { useState, createContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import axios from 'axios';

export const AppContext = createContext();

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/products');
      const data = response.data;
      setProducts(data);
    };
    fetchData();
  }, []);

  // Fetch cart from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cart');
        // Ensure cart is always an array
        setCart(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching cart:', error);
        setCart([]);
      }
    };
    fetchData();
  }, []);

  const addProduct = async (newProduct) => {
    try {
      await axios.post('http://localhost:3000/products', {
        name: newProduct.name,
        image: newProduct.image || "",
        price: parseFloat(newProduct.sellingPrice),
        originalPrice: parseFloat(newProduct.originalPrice) || 0,
        description: newProduct.description || "",
        category: newProduct.category || "Other",
        stock: parseInt(newProduct.stock) || 0
      });

      const productsResponse = await axios.get('http://localhost:3000/products');
      setProducts(productsResponse.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const addToCart = async (product) => {
    try {
      const response = await axios.post('http://localhost:3000/cart', {
        productId: product._id || product.id,
        name: product.name,
        price: product.price,
        image: product.image || '',
        quantity: 1
      });

      setCart(response.data.cart);
    } catch (error) {
      const existingItem = cart.find(item => item.productId === (product._id || product.id));
      if (existingItem) {
        setCart(cart.map(item =>
          item.productId === (product._id || product.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      } else {
        setCart([...cart, { ...product, productId: product._id || product.id, quantity: 1 }]);
      }
    }
  };

  const updateQuantity = async (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
    } else {
      try {
        const response = await axios.post(`http://localhost:3000/cart/${cartItemId}`, {
          quantity: newQuantity
        });

        setCart(response.data.cart);
      } catch (error) {

        setCart(cart.map(item =>
          item._id === cartItemId
            ? { ...item, quantity: newQuantity }
            : item
        ));
      }
    }
  };

  const removeFromCart = async (cartItemId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/cart/${cartItemId}`);
      setCart(response.data.cart);
    } catch (error) {
      // Fallback to local state
      setCart(cart.filter(item => item._id !== cartItemId));
    }
  };

  const cartCount = cart?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <AppContext.Provider value={{ products, cart, addProduct, addToCart, updateQuantity, removeFromCart }}>
      <div className="flex flex-col min-h-screen">
        <Navbar cartCount={cartCount} />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </AppContext.Provider>
  )
}
export default App