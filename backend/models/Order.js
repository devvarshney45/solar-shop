import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userEmail: String,
  items: [
    {
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  totalAmount: Number,
  status: {
    type: String,
    default: "Pending"
  }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);