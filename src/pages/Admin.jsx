import { useState, useEffect } from "react";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    image: ""
  });
  const [editId, setEditId] = useState(null);

  // Fetch products
  async function fetchProducts() {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle form change
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Add or Update product
  async function handleSubmit(e) {
    e.preventDefault();

    if (editId) {
      // UPDATE
      await fetch(`http://localhost:5000/api/products/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          price: Number(form.price)
        })
      });

      setEditId(null);

    } else {
      // ADD
      await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          price: Number(form.price)
        })
      });
    }

    setForm({ name: "", brand: "", price: "", image: "" });
    fetchProducts();
  }

  // Delete product
  async function handleDelete(id) {
    await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE"
    });
    fetchProducts();
  }

  // Edit product fill form
  function handleEdit(product) {
    setForm({
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image
    });
    setEditId(product._id);
  }

  return (
    <div className="bg-[#081426] min-h-screen text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f1f33] p-6 rounded mb-8 max-w-xl"
      >
        <h2 className="text-xl font-semibold mb-4">
          {editId ? "Edit Product" : "Add Product"}
        </h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full p-2 mb-3 rounded bg-[#081426]"
          required
        />

        <input
          name="brand"
          value={form.brand}
          onChange={handleChange}
          placeholder="Brand"
          className="w-full p-2 mb-3 rounded bg-[#081426]"
          required
        />

        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full p-2 mb-3 rounded bg-[#081426]"
          required
        />

        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 mb-3 rounded bg-[#081426]"
          required
        />

        <button className="bg-blue-600 px-4 py-2 rounded">
          {editId ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* Product List */}
      <div className="bg-[#0f1f33] p-6 rounded">
        <h2 className="text-xl font-semibold mb-4">All Products</h2>

        {products.map((p) => (
          <div
            key={p._id}
            className="flex justify-between items-center border-b border-gray-600 py-2"
          >
            <div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-gray-400">
                {p.brand} — ₹{p.price}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => handleEdit(p)}
                className="bg-yellow-500 px-3 py-1 rounded text-black"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(p._id)}
                className="bg-red-600 px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}