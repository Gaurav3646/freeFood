import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Protected from "./components/Protected";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import "./index.css";
import ImageScroller from "./components/ImageSlider";
import Donate from "./pages/Donate";
import Product from "./components/Product";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDeatils";
import Orders from "./pages/Orders";
function App() {
  return (
    <div className="appContainer">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/Orders" element={<Orders />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
