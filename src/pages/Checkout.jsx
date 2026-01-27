import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { Navigate } from "react-router-dom";

export default function Checkout() {
  const { user } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  // Agar login nahi → login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-[#081426] min-h-screen text-white p-10">
      
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <p className="mb-4 text-sm text-gray-300">
        Logged in as: <span className="text-blue-400">{user.email}</span>
      </p>

      {/* Order Items */}
      <div className="bg-[#0f1f33] p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        {cart.map(item => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.name}</span>
            <span className="text-green-400">₹ {item.price}</span>
          </div>
        ))}

        <hr className="my-4 border-gray-600" />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span className="text-green-400">₹ {total}</span>
        </div>
      </div>

      {/* Place Order Button */}
      <button className="bg-blue-600 px-8 py-3 rounded hover:bg-blue-700 transition">
        Place Order
      </button>

    </div>
  );
}