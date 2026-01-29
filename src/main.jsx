import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

import AOS from "aos";
import "aos/dist/aos.css";

/* ✅ FIX 1 — Disable browser automatic scroll restore */
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

/* ✅ FIX 2 — Initialize AOS */
AOS.init({
  duration: 600,   // smooth animation
  once: true,      // animation only once per scroll
});

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT}>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </GoogleOAuthProvider>
);