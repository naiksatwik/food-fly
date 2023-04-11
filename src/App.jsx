import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Register";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
const App = () => {
  return (
    <>
       <CartProvider>
        <Router>
          <Routes>
            <Route path="/" Component={Landing} />
            <Route path="/register" Component={Register} />
            <Route path="/login" Component={Login} />
            <Route path="/sigin" Component={SignIn} />
            <Route path="/home" Component={Home} />
            <Route path="/products" Component={Products} />
            <Route path="/cart" Component={Cart} />
            <Route path="/order" Component={Order} />
          </Routes>
        </Router>
        </CartProvider>
    </>
  );
};

export default App;
