import mongoose from "mongoose"

export const connectDB=async()=>{
    // await mongoose.connect('mongodb+srv://dbuser01:zSKqEWzzIaavBMKE@mycluster.85pic.mongodb.net/Foodweb?').then(()=>{
    //     console.log("Database connected");
// })

    await mongoose.connect('mongodb://localhost:27017/Food').then(()=>{
        console.log("Database connected to the server");
            
        })
        
}