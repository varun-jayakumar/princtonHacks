import express from "express";
import * as roadMapController from "../controllers/roadMapController.js";

const roadMapRouter = express.Router();
roadMapRouter.post("/", roadMapController.post);
roadMapRouter.get("/", roadMapController.getRefresher);
roadMapRouter.post("/one", roadMapController.postday1);
roadMapRouter.post("/otherthanone", roadMapController.postday2);
roadMapRouter.post("/fetching", roadMapController.retrive_from_db);

export default roadMapRouter;
