import Shelf from '@modules/shelves/infra/mongoose/entities/Shelf';
import IShelvesRepository from '@modules/shelves/repositories/IShelvesRepository';
import {
  ICreateShelf,
  IUpdateGameShelfDTO,
  IRemoveGameDTO,
} from '@modules/shelves/interfaces/ShelfDTO';

class ShelfRepository implements IShelvesRepository {
  public async createShelf({ _id }: Pick<ICreateShelf, '_id'>): Promise<void> {
    await Shelf.create({ _id });
  }

  public async findShelf({
    _id,
  }: Pick<ICreateShelf, '_id'>): Promise<ICreateShelf> {
    const shelf = await Shelf.findOne({
      _id,
    });

    return shelf;
  }

  public async updateShelf({ _id, game }: IUpdateGameShelfDTO) {
    await Shelf.updateOne(
      {
        _id,
      },
      {
        $push: { games: game },
      }
    );

    return {
      _id,
      name: game.name,
    };
  }

  public async delete({ id, _id }: IRemoveGameDTO) {
    const shelf = await Shelf.findOne({
      _id,
    });

    shelf.games = shelf.games.filter((game: any) => game.id != id);

    await shelf.save();

    return {
      message: 'Deletado',
    };
  }
}

export default ShelfRepository;
