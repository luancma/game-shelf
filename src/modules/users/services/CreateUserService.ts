import IUsersRepository from '../repositories/IUsersRepository';
import {
  requestCreateUserDTO,
  responseCreateUserDTO,
} from '../interfaces/UserDTO';

import { hash } from 'bcryptjs';

export default class CreateUserService {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute({
    email,
    name,
    nickname,
    password,
  }: requestCreateUserDTO): Promise<responseCreateUserDTO> {
    const checkUserExists = await this.usersRepository.getUser({ email });

    if (checkUserExists) {
      throw new Error('Email informado já está em uso');
    }

    const hashedPassword = await hash(password, 8);

    const user = this.usersRepository.createUser({
      name,
      email,
      nickname,
      password: hashedPassword,
    });

    return user;
  }
}
