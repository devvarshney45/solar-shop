import { useEffect, useState } from "react";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const token = localStorage.getItem("token");

      const res = await fetch("https://solar-shop-85m7.onrender.com/api/orders/my", {
        headers: {
          "Authorization": "Bearer " + token
        }
      });

      const data = await res.json();
      if(res.ok) setOrders(data);
    }

    fetchOrders();
  }, []);

  return (
    <div className="bg-[#081426] min-h-screen text-white p-8">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {orders.length === 0 && (
        <p className="text-gray-400">No orders yet</p>
      )}

      {orders.map(order => (
        <div key={order._id} className="bg-[#0f1f33] p-5 mb-4 rounded">

          <p className="text-sm text-gray-400">
            Order Date: {new Date(order.createdAt).toLocaleString()}
          </p>

          <p className="font-semibold mt-2">
            Status: {order.status}
          </p>

          <div className="mt-3">
            {order.items.map((item,i)=>(
              <div key={i} className="flex justify-between text-sm">
                <span>{item.name} × {item.quantity}</span>
                <span>₹ {item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <p className="font-bold mt-3">
            Total: ₹ {order.totalAmount}
          </p>
        </div>
      ))}
    </div>
  );
}