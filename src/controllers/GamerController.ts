import { Request, Response } from "express";
import GamesRepository from "../modules/games/repositories/GamesRepository";

class GamerController {
  async index(request: Request, response: Response) {
    const { name, page = 1 } = request.body;

    const gamesRepository = new GamesRepository();

    const gameList = await gamesRepository.list({ name, page });

    return response.json(gameList);
  }
}

export default new GamerController();
