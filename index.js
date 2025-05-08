import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Student from "./models/student.js";
import studentRouter from "./routes/studentRouter.js";
import itemRouter from "./routes/itemRouter.js";
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken";
import productRouter from "./routes/productRouter.js";
import verfiyJWT from "./middleware/auth.js";
import orderRouter from "./routes/orderRouter.js";
import dotenv from "dotenv";
import cors from "cors";



dotenv.config()
const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_URL).then(
    ()=>{
        console.log("Conected to the databaase");
    }
).catch(
    ()=>{
        console.log("Connection to the db failed");
    }
)

app.use(bodyParser.json())
app.use(verfiyJWT)

app.use("/api/student",studentRouter);
app.use("/api/item",itemRouter);
app.use("/api/user",userRouter);
app.use("/api/product",productRouter);
app.use("/api/order",orderRouter);

app.listen(3000,
    ()=>{
        console.log("Server is running on port 3000")
})