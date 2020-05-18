import { Request, Response } from 'express';
import ShelfRepository from '@modules/shelves/repositories/ShelfRepository';
import InsertGameToShelf from '@modules/shelves/services/InsertGameToShelf';

const shelfRepository = new ShelfRepository();

class ShelfController {
  async store(request: Request, response: Response): Promise<Response> {
    const { game } = request.body;

    const insetNewGame = new InsertGameToShelf(shelfRepository);

    try {
      const { name, id } = await insetNewGame.execute({
        userId: request.user.id,
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
      id: request.user.id,
    });

    return response.json(gameList.games);
  }

  async delete(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const gameList = await shelfRepository.findShelf({
      id: request.user.id,
    });

    gameList.games = gameList.games.filter((game: any) => game.id != id);

    await gameList.save();

    response.json({
      message: 'Jogo removido com sucesso',
    });
  }
}
export default new ShelfController();
