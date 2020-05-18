interface IGame {
  id: number;
  name: string;
}

export interface ICreateShelf {
  _id: string;
  games: IGame[];
}

export interface IUpdateGameShelfDTO {
  _id: string;
  game: IGame;
}
