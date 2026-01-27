import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";   // ✅ NEW IMPORT

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-[#081426] min-h-screen text-white p-10">
      
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div 
          key={item.id} 
          className="flex justify-between bg-[#0f1f33] p-4 mb-3 rounded"
        >
          <div>
            <h2>{item.name}</h2>
            <p className="text-green-400">₹ {item.price}</p>
          </div>

          <button 
            onClick={() => removeFromCart(item.id)}
            className="text-red-400"
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h2 className="mt-6 text-xl font-bold">
            Total: ₹ {total}
          </h2>

          {/* ✅ Checkout Button Added */}
          <Link to="/checkout">
            <button className="mt-6 bg-green-600 px-6 py-3 rounded text-white hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}

    </div>
  );
}