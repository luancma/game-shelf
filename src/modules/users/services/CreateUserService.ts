import UsersRepository from "../repositories/UsersRepository";
import { hash } from "bcryptjs";

interface UserDTO {
  name: string;
  nickname: string;
  password: string;
  email: string;
}

export default class CreateUserService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute({
    email,
    name,
    nickname,
    password
  }: UserDTO): Promise<any> {
    const checkUserExists = await this.usersRepository.getUser({ email });

    if (checkUserExists) {
      throw new Error("Email informado já está em uso");
    }

    const hashedPassword = await hash(password, 8);

    const user = this.usersRepository.createUser({
      name,
      email,
      nickname,
      password: hashedPassword
    });

    return user;
  }
}
