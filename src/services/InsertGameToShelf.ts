import ShelfRepository from '../repositories/ShelfRepository';
import { ShelfInterface } from '../models/Shelf';

interface GameI {
  id: number;
  name: string;
}

interface ShefI {
  userId: string;
  game: GameI;
}

class UpdateGameShelf {
  private shelfRepository: ShelfRepository;

  constructor(shelfRepository: ShelfRepository) {
    this.shelfRepository = shelfRepository;
  }

  public async execute({ userId, game }: ShefI): Promise<any> {
    const checkExistShelf = await this.shelfRepository.findShelf({
      id: userId,
    });

    const validateGame = (id: number, shelf: ShelfInterface): any =>
      shelf.games.find((game) => game.id === id);

    if (validateGame(game.id, checkExistShelf)) {
      throw new Error('Jogo já está cadastrado');
    }

    await this.shelfRepository.updateShelf({
      id: userId,
      game,
    });

    return {
      status: 'Sucesso',
      id: game.id,
      name: game.name,
    };
  }
}

export default UpdateGameShelf;
