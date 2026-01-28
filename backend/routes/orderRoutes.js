import express from "express";
import Order from "../models/Order.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

/* =====================
   PLACE ORDER (Customer)
===================== */
router.post("/", protect, async (req, res) => {
  try {
    const { items, totalAmount } = req.body;

    const order = await Order.create({
      userEmail: req.user.email,
      items,
      totalAmount,
      status: "Pending"
    });

    res.json({ message: "Order placed successfully", order });
  } catch (err) {
    res.status(500).json({ message: "Order failed" });
  }
});

/* =====================
   GET MY ORDERS (Customer)
===================== */
router.get("/my", protect, async (req, res) => {
  const orders = await Order.find({ userEmail: req.user.email })
    .sort({ createdAt: -1 });
  res.json(orders);
});

/* =====================
   GET ALL ORDERS (Admin)
===================== */
router.get("/", protect, adminOnly, async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

/* =====================
   UPDATE ORDER STATUS (Admin)
===================== */
router.put("/:id/status", protect, adminOnly, async (req, res) => {
  const { status } = req.body;

  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );

  res.json(order);
});

/* =====================
   DELETE ORDER (Admin)
===================== */
router.delete("/:id", protect, adminOnly, async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: "Order deleted" });
});

export default router;