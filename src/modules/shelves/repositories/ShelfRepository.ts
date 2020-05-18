import Shelf from '../entities/Shelf';

interface GameShelf {
  name: string;
}

interface ShelfI {
  id: string;
  game: GameShelf;
}

class ShelfRepository {
  public async findShelf({ id }: Omit<ShelfI, 'game'>): Promise<any> {
    const shelf = await Shelf.findOne({
      _id: id,
    });

    return shelf;
  }

  public async updateShelf({ id, game }: ShelfI) {
    await Shelf.updateOne(
      {
        _id: id,
      },
      {
        $push: { games: game },
      }
    );

    return {
      id,
      name: game.name,
    };
  }
}

export default ShelfRepository;
