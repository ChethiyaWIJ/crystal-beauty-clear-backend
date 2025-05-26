import express from "express";
import { createProduct, deleteProduct, getProducts, getProductsById, updateProduct } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/",createProduct)
productRouter.get("/",getProducts)
productRouter.get("/:id",getProductsById)
productRouter.delete("/:productId",deleteProduct)
productRouter.put("/:productId",updateProduct)

export default productRouter;