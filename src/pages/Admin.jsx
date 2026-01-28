import { useState } from "react";

export default function Admin() {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    image: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        brand: form.brand,
        price: Number(form.price),
        image: form.image
      })
    });

    if (res.ok) {
      alert("✅ Product Added Successfully");
      setForm({ name: "", brand: "", price: "", image: "" });
    } else {
      alert("❌ Error adding product");
    }
  }

  return (
    <div className="bg-[#081426] min-h-screen text-white flex justify-center items-center p-6">
      
      <form 
        onSubmit={handleSubmit}
        className="bg-[#0f1f33] p-8 rounded-xl w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6">Admin – Add Product</h1>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full p-3 mb-4 rounded bg-[#081426]"
          required
        />

        <input
          name="brand"
          value={form.brand}
          onChange={handleChange}
          placeholder="Brand (Luminous, Microtek...)"
          className="w-full p-3 mb-4 rounded bg-[#081426]"
          required
        />

        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          type="number"
          className="w-full p-3 mb-4 rounded bg-[#081426]"
          required
        />

        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-3 mb-4 rounded bg-[#081426]"
          required
        />

        <button className="w-full bg-blue-600 py-3 rounded hover:bg-blue-700">
          Add Product
        </button>
      </form>
    </div>
  );
}