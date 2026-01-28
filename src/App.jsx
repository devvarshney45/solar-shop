import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";

import ProtectedAdmin from "./components/ProtectedAdmin";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MyOrders from "./pages/MyOrders";

export default function App() {
  return (
    <GoogleOAuthProvider clientId="768160812865-hf2cvirtdlgq3vd5e9kad5ud3vu5h5o5.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>

          {/* Public Pages */}
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/:company" element={<Products />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/my-orders" element={<MyOrders />} />


          {/* Auth Pages */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />


          {/* Protected Admin Page */}
          <Route
            path="/admin"
            element={
              <ProtectedAdmin>
                <Admin />
              </ProtectedAdmin>
            }
          />

        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}