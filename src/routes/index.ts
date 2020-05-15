import { Router } from "express";
import igdbRouter from "./igdb.router";
import userRouter from "./user.router";
import sessionRouter from "./session.router";

const routes = Router();

routes.use("/games", igdbRouter);
routes.use("/user", userRouter);
routes.use("/session", sessionRouter);

export default routes;
