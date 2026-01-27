import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    login(email);
    navigate("/checkout");
  }

  return (
    <div className="bg-[#081426] min-h-screen flex items-center justify-center text-white">
      <form 
        onSubmit={handleLogin}
        className="bg-[#0f1f33] p-8 rounded-xl w-96"
      >
        <h1 className="text-2xl font-bold mb-5">Login</h1>

        <input 
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 mb-4 bg-[#081426] rounded"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        <button className="w-full bg-blue-600 py-3 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}