import User from "../models/User";

interface IUser {
  name: string;
  email: string;
  nickname: string;
  password: string;
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

  public async getUser({ email }: IUser): Promise<any> {
    const user = await User.findOne({ email });
    return user;
  }
}
export default UsersRepository;
