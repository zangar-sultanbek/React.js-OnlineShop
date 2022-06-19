import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
//Contexts
import cartContext from './Contexts/cartContext';
//Components
import Header from './Components/Header/Header';
import Home from './Pages/HomePage'
import Products from './Pages/ProductsPage'
import Cart from './Pages/CartPage'
import ProductIdPage from './Pages/ProductIdPage';
import ContactPage from './Pages/ContactPage';


const App = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart_zangar')) ?? []);

  return (
        <BrowserRouter>
            <cartContext.Provider value={
            {cart, setCart}}>
                <Routes>
                    <Route path='/' element={<Navigate to="/home"/>}/>
                    <Route path='/' element={<Header/>}>
                        <Route path="home" element={<Home/>}/>
                        <Route path="products" element={<Products/>}/>
                        <Route path="products/:id" element={<ProductIdPage/>}/>
                        <Route path="cart" element={<Cart/>}/>
                        <Route path="contact" element={<ContactPage/>}/>
                    </Route>
                    <Route path='*' element={<Navigate to="/home"/>}/>
                </Routes>
            </cartContext.Provider>
        </BrowserRouter>
  )
}

export default App