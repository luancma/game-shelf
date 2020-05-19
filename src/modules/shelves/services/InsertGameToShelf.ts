import ShelfRepository from '@modules/shelves/repositories/IShelvesRepository';
import {
  ICreateShelf,
  IUpdateGameShelfDTO,
} from '@modules/shelves/interfaces/ShelfDTO';

class UpdateGameShelf {
  private shelfRepository: ShelfRepository;

  constructor(shelfRepository: ShelfRepository) {
    this.shelfRepository = shelfRepository;
  }

  public async execute({ _id, game }: IUpdateGameShelfDTO): Promise<any> {
    const checkExistShelf = await this.shelfRepository.findShelf({
      _id: _id,
    });

    const validateGame = (id: number, shelf: ICreateShelf): any =>
      shelf.games.find((game) => game.id === id);

    if (validateGame(game.id, checkExistShelf)) {
      throw new Error('Jogo já está cadastrado');
    }

    await this.shelfRepository.updateShelf({
      _id: _id,
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
