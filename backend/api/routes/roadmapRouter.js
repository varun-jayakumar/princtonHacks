import express from "express";
import * as roadMapController from "../controllers/roadMapController.js";

const roadMapRouter = express.Router();

roadMapRouter.post("/", roadMapController.post);
roadMapRouter.get("/", roadMapController.getRefresher);

export default roadMapRouter;
