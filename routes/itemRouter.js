import express from "express"
import { getAllItems, getGoodItems, saveItem, searchItem } from "../controllers/itemController.js";

const itemRouter = express.Router();

itemRouter.get("/",getAllItems)
itemRouter.post("/",saveItem)
itemRouter.get("/good",getGoodItems)
itemRouter.get("/:name",searchItem)

export default itemRouter;