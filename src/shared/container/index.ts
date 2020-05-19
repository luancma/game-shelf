import { container } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/mongoose/repositories/UsersRepository';

import IShelvesRepository from '@modules/shelves/repositories/IShelvesRepository';
import ShelvesRepository from '@modules/shelves/infra/mongoose/repositories/ShelvesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IShelvesRepository>(
  'ShelvesRepository',
  ShelvesRepository
);
