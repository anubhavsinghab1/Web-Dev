import mongoose from "mongoose"

export const connectDB=async()=>{
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Database connected to the server");
            
        })
        
}
