import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";

export default function Navbar() {

  const companies = [
    "Luminous",
    "Microtek",
    "Livguard",
    "Eastman",
    "Phoenix",
    "Amaze",
    "Windsor"
  ];

  return (
    <div className="bg-[#1e293b]">

      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#3b82f6]">
          Varshney Solar
        </Link>



        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="hidden md:block px-4 py-2 rounded bg-[#0f172a] border border-gray-600 text-white"
        />

        {/* Icons */}
        <div className="flex gap-4 items-center text-white">
          <Link to="/login"><FiUser size={22} /></Link>
          <Link to="/cart"><FiShoppingCart size={22} /></Link>
        </div>
      </div>
    </div>
  );
}