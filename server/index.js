import express from "express";
import dotenv from  "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRouter.js";
import reviewRouter from "./routes/reviewRouter.js";

dotenv.config();
const corsOptions ={
      origin : "*",
      credentials: true,
      optionSuccessStatus:200
} 

const app = express();
app.use(express.json());
app.use(cors({corsOptions}));
app.use("/products",productRouter)
app.use("/users",userRouter)
app.use("/reviews",reviewRouter)

const port =process.env.PORT || 5040;

const connect = async () => {
      try {
            await mongoose.connect(process.env.MONGODB);
            console.log("Successfully Connected to data base");
            
      } catch (error) {
          console.log({msg: "error while trying to connect to db ",error})  
      }
}
try {
      app.listen(port,() =>{
            connect()
            console.log(`server started on port ${port}`)
            
      })
      
} catch (error) {
      console.log({msg:"error while trying to create a server", error})
}
