import userRouter from "./userRouter.js";
import roadMapRouter from "./roadmapRouter.js";
import chatRouter from "./chatRouter.js";
import dashboardRouter from "./dashboardRoutes.js";

export default (app) => {
  app.use("/user", userRouter);
  app.use("/roadmap", roadMapRouter);
  app.use("/chat", chatRouter);
  app.use("/dashboard", dashboardRouter);
};
