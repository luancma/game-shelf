import User from '../entities/User';
import {
  requestCreateUserDTO,
  responseCreateUserDTO,
} from '@modules/users/interfaces/UserDTO';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

class UsersRepository implements IUsersRepository {
  public async createUser({
    name,
    email,
    nickname,
    password,
  }: requestCreateUserDTO): Promise<responseCreateUserDTO> {
    const newUser = await User.create({
      name,
      nickname,
      email,
      password,
    });

    return newUser;
  }

  public async getUser({
    email,
  }: Pick<requestCreateUserDTO, 'email'>): Promise<any> {
    const user = await User.findOne({ email });
    return user;
  }
}
export default UsersRepository;
