import { useState } from 'react'
import { Routes, Route } from 'react-router';
import { Navbar } from "./components/Navbar";
import { Main } from './pages/main';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Product } from './pages/product';
import { Cart } from './pages/cart';
import { Profile } from './pages/profile';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/profile/:id" element={<Profile/>} />
      </Routes>
    </div>
  )
}

export default App
