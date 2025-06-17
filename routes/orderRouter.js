import express from "express";
import { changeOrder, createOrder, getOrders } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/",createOrder);
orderRouter.get("/",getOrders);
orderRouter.put("/:orderId",changeOrder);

export default orderRouter;