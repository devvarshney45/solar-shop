import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import "aos/dist/aos.css"
import AOS from "aos"
AOS.init({
  duration:200,
  once:false
});
createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="import.meta.env.VITE_GOOGLE_CLIENT">
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </GoogleOAuthProvider>
)