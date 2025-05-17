import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router';
import { Main } from './pages/main';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Product } from './pages/product';
import { Cart } from './pages/cart';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>

          <Route path="/" element={<Main/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
