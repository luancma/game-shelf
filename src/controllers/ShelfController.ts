import { Request, Response } from 'express';
import Shelf, { ShelfInterface } from '../models/Shelf';

class ShelfController {
  async store(request: Request, response: Response): Promise<void> {
    const game = {
      id: 3333,
      cover: {
        id: 85867,
        height: 960,
        url: '//images.igdb.com/igdb/image/upload/t_thumb/co1u97.jpg',
        width: 720,
      },
      involved_companies: [
        {
          id: 24212,
          company: {
            id: 248,
            name: 'Bandai Namco Entertainment',
          },
        },
        {
          id: 24213,
          company: {
            id: 2438,
            name: 'CyberConnect2',
          },
        },
      ],
      name: 'Naruto Shippuden: Ultimate Ninja Storm 4',
      platforms: [
        {
          id: 6,
          name: 'PC (Microsoft Windows)',
        },
        {
          id: 48,
          name: 'PlayStation 4',
        },
        {
          id: 49,
          name: 'Xbox One',
        },
      ],
      popularity: 5.903648259672391,
      rating_count: 61,
      summary:
        'Experience the exhilarating full-adventure Naruto Shippuden and follow Naruto Uzumaki on all his fights.\n\nWith more than 12 million Naruto Shippuden Ultimate Ninja STORM games sold worldwide, this series established itself among the pinnacle of Anime & Manga adaptations on videogames! As every good story comes to an end Naruto Shippuden: Ultimate Ninja Storm 4 is going to be the ultimate STORM game! For the first time ever, a Naruto/Naruto Shippuden game will take advantage of the graphics power of the new generation of consoles.',
      themes: [
        {
          id: 1,
          name: 'Action',
        },
      ],
    };

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

    response.json(gameList);
  }
}
export default new ShelfController();
