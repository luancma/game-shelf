import {
  requestCreateUserDTO,
  responseCreateUserDTO,
} from '../interfaces/UserDTO';

export default interface IUsersRepository {
  createUser({
    name,
    email,
    nickname,
    password,
  }: requestCreateUserDTO): Promise<responseCreateUserDTO | undefined>;

  getUser({
    email,
  }: Pick<requestCreateUserDTO, 'email'>): Promise<
    responseCreateUserDTO | undefined
  >;
}
