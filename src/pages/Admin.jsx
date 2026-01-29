import { useState, useEffect } from "react";

export default function Admin() {
  // ---------------- PRODUCTS STATE ----------------
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    image: ""
  });
  const [editId, setEditId] = useState(null);

  // ---------------- ORDERS STATE ----------------
  const [orders, setOrders] = useState([]);

  // Get token
  function getToken() {
    return localStorage.getItem("token");
  }

  // ---------------- FETCH PRODUCTS ----------------
  async function fetchProducts() {
    const res = await fetch("https://solar-shop-85m7.onrender.com/api/products");
    const data = await res.json();
    setProducts(data);
  }

  // ---------------- FETCH ORDERS (ADMIN) ----------------
  async function fetchOrders() {
    const token = getToken();

    const res = await fetch("https://solar-shop-85m7.onrender.com/api/orders", {
      headers: {
        Authorization: "Bearer " + token
      }
    });

    if (!res.ok) return;

    const data = await res.json();
    setOrders(data);
  }

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  // ---------------- HANDLE FORM CHANGE ----------------
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // ---------------- ADD / UPDATE PRODUCT ----------------
  async function handleSubmit(e) {
    e.preventDefault();
    const token = getToken();

    const url = editId
      ? `https://solar-shop-85m7.onrender.com/api/products/${editId}`
      : "https://solar-shop-85m7.onrender.com/api/products";

    const method = editId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      body: JSON.stringify({
        ...form,
        price: Number(form.price)
      })
    });

    if (!res.ok) {
      alert("Unauthorized! Make sure you are admin.");
      return;
    }

    setForm({ name: "", brand: "", price: "", image: "" });
    setEditId(null);
    fetchProducts();
  }

  // ---------------- DELETE PRODUCT ----------------
  async function handleDelete(id) {
    const token = getToken();

    const res = await fetch(`https://solar-shop-85m7.onrender.com/api/products/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token
      }
    });

    if (!res.ok) {
      alert("Unauthorized!");
      return;
    }

    fetchProducts();
  }

  // ---------------- EDIT PRODUCT ----------------
  function handleEdit(product) {
    setForm({
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image
    });
    setEditId(product._id);
  }

  // ---------------- UPDATE ORDER STATUS ----------------
  async function updateOrderStatus(orderId, newStatus) {
    const token = getToken();

    const res = await fetch(`
      https://solar-shop-85m7.onrender.com/api/orders/${orderId}/status`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        },
        body: JSON.stringify({ status: newStatus })
      }
    );

    if (!res.ok) {
      alert("Failed to update status");
      return;
    }

    fetchOrders();
  }

  // ===================== UI =====================
  return (
    <div className="bg-[#081426] min-h-screen text-white p-8 space-y-10">

      {/* ============ PRODUCT MANAGEMENT ============ */}
      <div>
        <h1 className="text-3xl font-bold mb-6">Admin Panel - Products</h1>

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

      {/* ============ ORDERS MANAGEMENT ============ */}
      <div>
        <h1 className="text-3xl font-bold mb-6">Customer Orders</h1>

        {orders.length === 0 && (
          <p className="text-gray-400">No orders yet</p>
        )}

        {orders.map((order) => (
          <div key={order._id} className="bg-[#0f1f33] p-5 mb-4 rounded">

            <p className="text-sm text-gray-400">
              Date: {new Date(order.createdAt).toLocaleString()}
            </p>

            <p className="mt-2">Customer: {order.userEmail}</p>

            <div className="mt-3">
              {order.items.map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span>{item.name} × {item.quantity}</span>
                  <span>₹ {item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <p className="font-bold mt-3">
              Total: ₹ {order.totalAmount}
            </p>

            {/* Status Dropdown */}
            <div className="mt-3">
              <label className="text-sm text-gray-400">Status:</label>

              <select
                value={order.status}
                onChange={(e) =>
                  updateOrderStatus(order._id, e.target.value)
                }
                className="bg-[#081426] ml-2 p-1 rounded"
              >
                <option>Pending</option>
                <option>Confirmed</option>
                <option>Delivered</option>
              </select>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}