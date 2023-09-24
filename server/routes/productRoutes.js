import express from "express";
import { createProduct, deleteProduct, getProducts, getSingleProducts } from "../controllers/productsControllers.js";
const productRouter= express.Router();

productRouter.get("/", getProducts)
productRouter.get("/:id", getSingleProducts)
productRouter.delete("/:id", deleteProduct)
productRouter.post("/",createProduct)




export default productRouter;