import Shelf from '@modules/shelves/infra/entities/Shelf';
import IShelvesRepository from '@modules/shelves/repositories/IShelvesRepository';
import { IShelf } from '@modules/shelves/interfaces/ICreateShelve';

class ShelfRepository implements IShelvesRepository {
  public async findShelf({ _id }: Pick<IShelf, '_id'>): Promise<IShelf> {
    const shelf = await Shelf.findOne({
      _id,
    });

    return shelf;
  }

  public async updateShelf({ _id, game }: IShelf) {
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
}

export default ShelfRepository;
