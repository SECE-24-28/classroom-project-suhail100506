import { useState, createContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import headphoneImg from "./components/headphone.png";
import standImg from "./components/stand.png";
import mouseImg from "./components/mouse.png";

export const AppContext = createContext();

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        if (data && data.length > 0) {
          setProducts(data);
        }
      } catch (error) {
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch('http://localhost:3000/cart');
        const data = await response.json();
        if (data && data.length > 0) {
          setCart(data);
        }
      } catch (error) {
        // Error fetching cart
      }
    };
    fetchCart();
  }, []);

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
          image: newProduct.image || "",
          category: newProduct.category || "Other"
        })
      });

      const data = await response.json();

      if (response.ok) {

        const productsResponse = await fetch('http://localhost:3000/products');
        const updatedProducts = await productsResponse.json();
        setProducts(updatedProducts);
      }
    } catch (error) {
    }
  };

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
          image: product.image || '',
          quantity: 1
        })
      });

      const data = await response.json();

      if (response.ok) {
        setCart(data.cart);
      }
    } catch (error) {
      // Fallback to local state
      const existingItem = cart.find(item => item.productId === product.id);
      if (existingItem) {
        setCart(cart.map(item =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      } else {
        setCart([...cart, { ...product, productId: product.id, quantity: 1 }]);
      }
    }
  };

  const updateQuantity = async (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
    } else {
      try {
        const response = await fetch(`http://localhost:3000/cart/${cartItemId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify({ quantity: newQuantity })
        });

        const data = await response.json();

        if (response.ok) {
          setCart(data.cart);
        }
      } catch (error) {

        setCart(cart.map(item =>
          item.id === cartItemId
            ? { ...item, quantity: newQuantity }
            : item
        ));
      }
    }
  };

  const removeFromCart = async (cartItemId) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${cartItemId}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (response.ok) {
        setCart(data.cart);
      }
    } catch (error) {
      // Fallback to local state
      setCart(cart.filter(item => item.id !== cartItemId));
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