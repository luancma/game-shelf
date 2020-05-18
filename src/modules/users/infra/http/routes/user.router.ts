import { Router } from "express";
import UserController from "@controllers/UserController";
import validateSession from "@modules/sessions/infra/http/middlewares/validateSession";

const userRouter = Router();

userRouter.post("/create", UserController.store);


userRouter.get("/", validateSession, UserController.show);

export default userRouter;
