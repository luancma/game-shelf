import Router from "express";
import GamerController from "@controllers/GamerController";
import validateSession from "@modules/sessions/infra/http/middlewares/validateSession";


const igdbRouter = Router();

igdbRouter.use(validateSession);

igdbRouter.get("/", GamerController.index);

export default igdbRouter;
