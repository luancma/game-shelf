import { Router } from 'express';
import validateSession from "../middlewares/validateSession";
import ShelfController from '../controllers/ShelfController';


const shelfRouter = Router();

shelfRouter.use(validateSession)

shelfRouter.post('/', ShelfController.store);

export default shelfRouter;