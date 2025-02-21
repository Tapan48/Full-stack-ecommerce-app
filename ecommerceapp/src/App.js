import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import { ShopContextProvider } from "./context/shop-context";
import Login from "./pages/authentication/login";
import Register from "./pages/authentication/register";
import Cart from "./pages/cart/cart";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
// import { ShopContextProvider } from "./context/shop-context";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          {/* console.log("hi") */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/shop" element={<Shop />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
