import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';
import UsersRepository from '@modules/users/infra/mongoose/repositories/UsersRepository';

interface UserSign {
  email: string;
  password: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
}

interface Response {
  user: User;
  token: string;
}

class CreateSessionService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute({ email, password }: UserSign): Promise<Response> {
    const user = await this.usersRepository.getUser({ email });

    if (!user) {
      throw new Error('Email ou senha inválidos');
    }

    const validatePassword = compare(password, user.password);

    if (!validatePassword) {
      throw new Error('Email ou senha inválidos');
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: `${user._id}`,
      expiresIn: expiresIn,
    });

    return { user, token };
  }
}

export default CreateSessionService;
