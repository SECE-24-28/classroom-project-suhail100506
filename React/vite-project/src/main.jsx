import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './components/About.jsx'
import Contact from './components/contact.jsx'
import Header from './components/Header.jsx'
import HomeLayout from './Layout/HomeLayout.jsx'
import ProductList from './components/ProductList.jsx'
import ProductDetails from './components/ProductDetails.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path='/app' element={<App />} />
        <Route path='/product'>
          <Route index element={<ProductList ProductList={ProductList} />} />
          <Route path='details' element={<ProductDetails />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Header />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
