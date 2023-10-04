import express from "express";
import { createReview, deleteReview, getReviews, getSingleReview } from "../controllers/reviewControllers.js";
const reviewRouter= express.Router();

reviewRouter.get("/", getReviews)
reviewRouter.get("/:id", getSingleReview)
reviewRouter.delete("/:id", deleteReview)
reviewRouter.post("/",createReview)





export default reviewRouter;