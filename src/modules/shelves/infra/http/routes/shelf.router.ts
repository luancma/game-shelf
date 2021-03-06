import { Router } from 'express';
import validateSession from '@modules/sessions/infra/http/middlewares/validateSession';

import ShelfController from '@controllers/ShelfController';

const shelfRouter = Router();

shelfRouter.use(validateSession);

shelfRouter.post('/', ShelfController.store);
shelfRouter.get('/', ShelfController.index);
shelfRouter.delete('/:id', ShelfController.delete);

export default shelfRouter;
