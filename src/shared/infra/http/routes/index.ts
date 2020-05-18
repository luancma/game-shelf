import { Router } from "express";

import igdbRouter from "@modules/games/infra/http/routes/igdb.router"
import userRouter from "@modules/users/infra/http/routes/user.router";
import sessionRouter from "@modules/sessions/infra/http/routes/session.router";
import shelfRouter from '@modules/shelves/infra/http/routes/shelf.router';

const routes = Router();

routes.use("/games", igdbRouter);
routes.use("/user", userRouter);
routes.use("/session", sessionRouter);
routes.use("/shelf", shelfRouter)

export default routes;
