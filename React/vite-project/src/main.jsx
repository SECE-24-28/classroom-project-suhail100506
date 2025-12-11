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
import BlogsList from './components/BlogsList.jsx'
import BlogDetails from './components/BlogDetails.jsx'
import LoginPage from './components/LoginPage.jsx'
import AdminPage from './components/AdminPage.jsx'
import ProtectRoute from './components/ProtectRoute.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path='/app' element={<App />} />
        <Route path='/product'>
          <Route index element={<ProductList ProductList={ProductList} />} />
          <Route path=':id' element={<ProductDetails />} />
        </Route>
        <Route path='/blogs' element={<BlogsList />} />
        <Route path='/blogs/:id' element={<BlogDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Header />} />
      </Route>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/admin' element={<ProtectRoute><AdminPage /></ProtectRoute>} />
    </Routes>
  </BrowserRouter>
)
