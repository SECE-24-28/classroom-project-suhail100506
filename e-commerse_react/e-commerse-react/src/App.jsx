import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Products from './components/Products'
import AddProduct from './components/AddProduct'
import Cart from './components/Cart'
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
      image: headphoneImg
    },
    {
      id: 2,
      name: "Laptop Stand",
      description: "Ergonomic aluminum laptop stand for better posture",
      price: 450.00,
      image: standImg
    },
    {
      id: 3,
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse with adjustable DPI",
      price: 499.00,
      image: mouseImg
    }
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

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

  return (
    <>
      <Navbar
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
        onCartClick={() => setShowCart(!showCart)}
        onHomeClick={() => setShowCart(false)}
      />
      {showCart ? (
        <Cart
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
        />
      ) : (
        <>
          <Products products={products} onAddToCart={addToCart} />
          <AddProduct onAddProduct={addProduct} />
        </>
      )}
      <Footer />
    </>
  )
}
export default App