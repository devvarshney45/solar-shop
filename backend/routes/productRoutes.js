import express from "express";
const router = express.Router();
import Product from "../models/Products.js";
router.get("/", async (req,res)=>{
    const  products= await Product.find();
    res.json(products);
});


router.post("/",async (req,res)=>{
    const newProduct= new Product(req.body);
    await newProduct.save();
    res.json("Products added");
});

export default router;