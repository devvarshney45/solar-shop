import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-[#081426] min-h-screen text-white p-8">
      
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 && (
        <p className="text-gray-400">Cart is empty</p>
      )}

      {cart.map(item => (
        <div 
          key={item._id} 
          className="flex justify-between items-center bg-[#0f1f33] p-4 mb-3 rounded"
        >
          <div>
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-400">{item.brand}</p>
            <p className="text-green-400">
              ₹ {item.price} × {item.quantity}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-bold">
              ₹ {item.price * item.quantity}
            </p>

            <button 
              onClick={() => removeFromCart(item._id)}
              className="text-red-400"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h2 className="mt-6 text-xl font-bold">
            Total: ₹ {total}
          </h2>

          <Link to="/checkout">
            <button className="mt-4 bg-green-600 px-6 py-3 rounded">
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}