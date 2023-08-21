import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/main/Main';
import Cart from './components/cart/Cart';
import CartProvider from './context/Cart-Context';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;