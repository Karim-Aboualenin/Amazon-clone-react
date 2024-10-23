import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Orders from './Pages/Orders';
import Purchase from './Pages/Purchase';
import Prime from './Pages/Prime';
import CreateAccount from './Pages/CreateAccount'; // استيراد الصفحة الجديدة
import PrimePage from './Pages/PrimePage';
import Cart from './Pages/Cart';

import BuyAgain from './Pages/BuyAgain'; // استيراد الصفحة الجديدة
import Nav from './components/Nav'; // افترض أن مكون Nav في مجلد components
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
            <Nav /> {/* مكون Nav سيكون ثابتاً في كل الصفحات */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />  {/* ربط الصفحة */}
          <Route path="/BuyAgain" element={<BuyAgain />} />
          <Route path="/PrimePage" element={<PrimePage />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/Prime" element={<Prime />} />
        </Routes>
      </div>
      <Footer/>

    </Router>
  );
}

export default App;
