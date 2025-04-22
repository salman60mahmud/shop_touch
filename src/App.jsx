import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Shop />} />
        <Route path='men' element={<ShopCategory category="men" />} />
        <Route path='women' element={<ShopCategory category="women" />} />
        <Route path='kids' element={<ShopCategory category="kids" />} />
        <Route path='products'>
          <Route index element={<Products />} />
          <Route path=':productsId' element={<Products />} />
          </Route>
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<LoginSignup></LoginSignup>} />

      </Routes>
    </>
  )
}

export default App
