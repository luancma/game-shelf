import Router from "express";
import GamerController from "../controllers/GamerController";
import validateSession from "../middlewares/validateSession";

const igdbRouter = Router();

// igdbRouter.use(validateSession);

igdbRouter.get("/", GamerController.index);

export default igdbRouter;
