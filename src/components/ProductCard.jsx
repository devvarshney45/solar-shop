import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div data-aos="fade-up" className="bg-[#0f1f33] rounded-xl p-4">
      <img src={product.image} className="w-full h-48 object-cover rounded-lg"/>

      <h2 className="mt-3 font-semibold">{product.name}</h2>
      <p className="text-blue-400">{product.brand}</p>
      <p className="font-bold text-green-400">₹ {product.price}</p>

      <button 
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}