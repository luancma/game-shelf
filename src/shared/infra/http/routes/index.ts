import { Router } from "express";
import igdbRouter from "./igdb.router";
import userRouter from "./user.router";
import sessionRouter from "./session.router";
import shelfRouter from './shelf.router';

const routes = Router();

routes.use("/games", igdbRouter);
routes.use("/user", userRouter);
routes.use("/session", sessionRouter);
routes.use("/shelf", shelfRouter)

export default routes;
