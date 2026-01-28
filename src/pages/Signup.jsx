import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { AuthContext } from "../context/AuthContext";

export default function Signup() {
  const [form, setForm] = useState({ name:"", email:"", password:"" });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  // Normal Signup
  async function handleSubmit(e){
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/signup",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if(res.ok){
      login(data);       // 🔥 Context login
      navigate("/");
    } else {
      alert(data.message || "Signup failed");
    }
  }

  // Google Signup/Login
  async function handleGoogleSuccess(response){
    const res = await fetch("http://localhost:5000/api/auth/google",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ token: response.credential })
    });

    const data = await res.json();

    if(res.ok){
      login(data);       // 🔥 Context login
      navigate("/");
    } else {
      alert("Google Signup Failed");
    }
  }

  return (
    <div className="bg-[#081426] min-h-screen flex items-center justify-center text-white">
      
      <form onSubmit={handleSubmit}
        className="bg-[#0f1f33] p-8 rounded w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        <input 
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-2 mb-3 rounded bg-[#081426]"
          required
        />

        <input 
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 mb-3 rounded bg-[#081426]"
          required
        />

        <input 
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-[#081426]"
          required
        />

        <button className="bg-green-600 w-full py-2 rounded mb-4">
          Create Account
        </button>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={()=> alert("Google Signup Failed")}
          />
        </div>

        <p className="text-sm text-center mt-4">
          Already user?
          <Link to="/login" className="text-blue-400"> Login</Link>
        </p>
      </form>
    </div>
  );
}