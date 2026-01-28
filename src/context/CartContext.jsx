import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add to cart with quantity handling
  function addToCart(product) {
    const existing = cart.find(item => item._id === product._id);

    if (existing) {
      // Agar product already cart me hai → quantity increase
      setCart(
        cart.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Naya product → quantity = 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  // Remove single product completely
  function removeFromCart(id) {
    setCart(cart.filter(item => item._id !== id));
  }

  // Clear full cart (after checkout)
  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider 
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}