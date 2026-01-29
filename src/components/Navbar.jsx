import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  function handleSearch(e) {
    if (e.key === "Enter" && search.trim() !== "") {
      navigate(`/products/${search.toUpperCase()}`);
      setSearch("");
    }
  }

  return (
    <div className="bg-[#1e293b] text-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">

        {/* ✅ Logo + Text */}
        <Link to="/" className="flex items-center gap-3 ml-[-30px]">
         <img 
  src="/kkkkkk.png"
  alt="Pankaj Electricals"
  className="h-8 w-auto scale-450 origin-left"
 />
          <span className="ml-12 text-2xl font-bold text-[#FFD34D]">
            PANKAJ ELECTRICALS
          </span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-[#0f172a] border border-gray-600 rounded px-3 py-2 ml-auto mr-6">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search brand..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            className="bg-transparent outline-none text-sm w-48"
          />
        </div>

        {/* Icons */}
        <div className="flex gap-5 items-center text-[#36BDEF]">

          {/* Cart */}
          <Link to="/cart">
            <FiShoppingCart size={22} />
          </Link>

          {/* User */}
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

                  <p className="font-semibold text-sm">{user.name}</p>
                  <p className="text-xs text-gray-400">{user.email}</p>

                  <hr className="my-2 border-gray-600"/>

                  <Link 
                    to="/my-orders"
                    className="text-sm block mb-2 hover:text-blue-400"
                    onClick={() => setOpen(false)}
                  >
                    My Orders
                  </Link>

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