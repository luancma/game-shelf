import { ICreateShelf, IUpdateGameShelfDTO } from '../interfaces/ShelfDTO';

export default interface IShelvesRepository {
  findShelf({
    _id,
  }: Pick<ICreateShelf, '_id'>): Promise<ICreateShelf> | undefined;

  updateShelf({ _id, game }: IUpdateGameShelfDTO): Promise<any> | undefined;
}
