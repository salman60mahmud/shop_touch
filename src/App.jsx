import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer'
import NotFound from './Components/NotFound'
import Admin from './Pages/Admin'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Admin/>
      <Routes>
        <Route index element={<Shop />} />
        <Route path='men' element={<ShopCategory banner='/Images/banner_mens.png' category="men" />} />
        <Route path='women' element={<ShopCategory banner='/Images/banner_women.png' category="women" />} />
        <Route path='kids' element={<ShopCategory banner='/Images/banner_kids.png' category="kids" />} />
        <Route path='products'>
          <Route index element={<Products />} />
          <Route path=':productsId' element={<Products />} />
        </Route>
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<LoginSignup />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App