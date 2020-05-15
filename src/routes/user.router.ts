import { Router } from "express";
import UserController from "../controllers/UserController";
import validateSession from "../middlewares/validateSession";

const userRouter = Router();

userRouter.post("/create", UserController.store);

// userRouter.use(validateSession);

userRouter.get("/", validateSession, UserController.show);

export default userRouter;
