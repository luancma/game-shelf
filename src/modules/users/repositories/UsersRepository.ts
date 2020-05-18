import User from "../infra/entities/User";

interface IUser {
  name: string;
  email: string;
  nickname: string;
  password: string;
}

interface GetUSer {
  email: string
}

class UsersRepository {
  public async createUser({
    name,
    email,
    nickname,
    password
  }: IUser): Promise<any> {
    const newUser = await User.create({
      name,
      nickname,
      email,
      password
    });

    return newUser;
  }

  public async getUser({ email }: GetUSer): Promise<any> {
    const user = await User.findOne({ email });
    return user;
  }
}
export default UsersRepository;
