import express from "express";
import Product from "../models/Products.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.get("/", async(req,res)=>{
  const products = await Product.find();
  res.json(products);
});

// Admin Only CRUD
router.post("/", protect, adminOnly, async(req,res)=>{
  const product = await Product.create(req.body);
  res.json(product);
});

router.put("/:id", protect, adminOnly, async(req,res)=>{
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(updated);
});

router.delete("/:id", protect, adminOnly, async(req,res)=>{
  await Product.findByIdAndDelete(req.params.id);
  res.json({message:"Deleted"});
});

export default router;