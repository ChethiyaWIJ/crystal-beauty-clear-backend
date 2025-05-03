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

const app = express();

mongoose.connect("mongodb+srv://admin:123@cluster0.ro4ejnd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
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