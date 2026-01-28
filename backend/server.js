import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js"
dotenv.config()
connectDB();
const app=express();
app.use(cors());
app.use(express.json());



app.get("/",(req,res)=>{
    res.send("Server runnng");
});

const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`server runnung on port ${PORT}`);

});
app.use("/api/products",productRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/orders",orderRoutes);