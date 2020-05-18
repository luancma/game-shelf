import { Request, Response } from 'express';
import Shelf, { ShelfInterface } from '../models/Shelf';

class ShelfController {
  async store(request: Request, response: Response): Promise<void> {
    const { game } = request.body;

    const checkExistShelf = await Shelf.findOne({
      _id: request.user.id,
    });

    if (!checkExistShelf) {
      const newShelf = await Shelf.create({
        _id: request.user.id,
      });

      insertGame(newShelf);
    }

    function validateGame(id: number, shelf: ShelfInterface): any {
      return shelf.games.find((game) => game.id === id);
    }

    async function insertGame(shelf = checkExistShelf) {
      if (validateGame(game.id, shelf)) {
        return response.json({
          message: 'Jogo já está cadastrado',
        });
      }

      await Shelf.updateOne(
        {
          _id: request.user.id,
        },
        {
          $push: { games: game },
        }
      );

      return response.json({
        status: 'Sucesso',
        game_name: game.name,
      });
    }

    insertGame();
  }

  async index(request: Request, response: Response): Promise<Response> {
    const gameList = await Shelf.findOne({
      _id: request.user.id,
    });

    return response.json(gameList.games);
  }

  async delete(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const gameList = await Shelf.findOne({
      _id: request.user.id,
    });

    gameList.games = gameList.games.filter((game) => game.id != id);

    await gameList.save();

    response.json({
      message: 'Jogo removido com sucesso',
    });
  }
}
export default new ShelfController();
