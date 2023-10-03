import express from "express";
import { createUser, deleteUser, getSingleUser, getUsers, signInUser } from "../controllers/usersControllers.js";
const userRouter= express.Router();

userRouter.get("/", getUsers)
userRouter.get("/:id", getSingleUser)
userRouter.delete("/:id", deleteUser)
userRouter.post("/register",createUser)
userRouter.post("/login",signInUser)




export default userRouter;