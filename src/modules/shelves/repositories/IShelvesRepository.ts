import {
  ICreateShelf,
  IUpdateGameShelfDTO,
  IRemoveGameDTO,
} from '../interfaces/ShelfDTO';

export default interface IShelvesRepository {
  findShelf({
    _id,
  }: Pick<ICreateShelf, '_id'>): Promise<ICreateShelf> | undefined;

  updateShelf({ _id, game }: IUpdateGameShelfDTO): Promise<any> | undefined;

  delete({ id, _id }: IRemoveGameDTO): Promise<any> | undefined;
}
