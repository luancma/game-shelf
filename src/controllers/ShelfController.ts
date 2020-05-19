import { Request, Response } from 'express';
import ShelfRepository from '@modules/shelves/infra/mongoose/ShelvesRepository';
import InsertGameToShelf from '@modules/shelves/services/InsertGameToShelf';

const shelfRepository = new ShelfRepository();

class ShelfController {
  async store(request: Request, response: Response): Promise<Response> {
    const { game } = request.body;

    const insetNewGame = new InsertGameToShelf(shelfRepository);

    try {
      const { name, id } = await insetNewGame.execute({
        _id: request.user.id,
        game,
      });

      return response.json({
        message: 'Jogo adicionado com sucesso',
        id,
        name,
      });
    } catch (error) {
      return response.status(400).json({
        error: error.message,
      });
    }
  }

  async index(request: Request, response: Response): Promise<Response> {
    const gameList = await shelfRepository.findShelf({
      _id: request.user.id,
    });

    return response.json(gameList.games);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await shelfRepository.delete({ id, _id: request.user.id });

      response.json({
        message: 'Jogo removido com sucesso',
      });
    } catch (error) {
      return response.status(400).json({
        error: error.message,
      });
    }
  }
}
export default new ShelfController();
