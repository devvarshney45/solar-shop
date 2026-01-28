import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function handleLogout(){
    logout();
    navigate("/login");
  }

  return (
    <div className="bg-[#1e293b] text-white">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#3b82f6]">
          Varshney Solar
        </Link>

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="hidden md:block px-4 py-2 rounded bg-[#0f172a] border border-gray-600"
        />

        {/* Icons */}
        <div className="flex gap-5 items-center">

          {/* Cart */}
          <Link to="/cart">
            <FiShoppingCart size={22} />
          </Link>

          {/* User / Profile */}
          {!user ? (
            <Link to="/login">
              <FiUser size={22} />
            </Link>
          ) : (
            <div className="relative">
              <button onClick={() => setOpen(!open)}>
                <FiUser size={22} />
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-48 bg-[#081426] rounded shadow-lg p-3 z-50">

                  {/* User Info */}
                  <p className="font-semibold text-sm">{user.name}</p>
                  <p className="text-xs text-gray-400">{user.email}</p>

                  <hr className="my-2 border-gray-600"/>

                  {/* My Orders Link */}
                  <Link 
                    to="/my-orders"
                    className="text-sm block mb-2 hover:text-blue-400"
                    onClick={() => setOpen(false)}
                  >
                    My Orders
                  </Link>

                  {/* Admin Panel link if admin */}
                  {user.isAdmin && (
                    <Link
                      to="/admin"
                      className="text-sm block mb-2 hover:text-green-400"
                      onClick={() => setOpen(false)}
                    >
                      Admin Panel
                    </Link>
                  )}

                  <hr className="my-2 border-gray-600"/>

                  {/* Logout */}
                  <button 
                    onClick={handleLogout}
                    className="text-red-400 text-sm w-full text-left"
                  >
                    Logout
                  </button>

                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}