import mongoose, { connect } from "mongoose";
const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Atlas Connected");
    }
    catch(error){
        console.log("mongodb connection not complete");
        process.exit(1);

    }
};
export default connectDB;