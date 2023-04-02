import express from "express";

import * as dashboardController from "../controllers/dashboardController.js";

const dashboardRouter = express.Router();

dashboardRouter.post("/dash", dashboardController.getCourse);

export default dashboardRouter;
