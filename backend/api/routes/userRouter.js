import express from "express";
import * as usercontroller from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/", usercontroller.post);
userRouter.post("/login", usercontroller.userLogin);

export default userRouter;
