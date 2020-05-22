import { Request, Response } from 'express';
import GamesRepository from '@modules/games/repositories/GamesRepository';

class GamerController {
  async index(request: Request, response: Response) {
    const { name, page = 1 } = request.body;

    const gamesRepository = new GamesRepository();

    try {
      const gameList = await gamesRepository.list({ name, page });
      response.json({ games: gameList[0].result });
    } catch (error) {
      return response.status(400).json({
        error: error.message,
      });
    }
  }
}

export default new GamerController();
