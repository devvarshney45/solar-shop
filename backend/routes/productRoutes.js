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

router.put("/:id",async (res,req)=>{
    await Product.findByIdAndUpdate(req.params.id,req.body);
    res.json("Product updated");
});

router.delete("/:id",async (req,res)=>{
    await Product.findByIdAndDelete(req.params.id);
    res.json("Product Deleted");
} );

export default router;