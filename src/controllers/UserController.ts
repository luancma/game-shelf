import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UsersRepository from '@modules/users/infra/mongoose/repositories/UsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';
import ShelvesRepository from '@modules/shelves/infra/mongoose/repositories/ShelvesRepository';
import { responseCreateUserDTO } from '@modules/users/interfaces/UserDTO';

const userRepository = new UsersRepository();
const shelfRepository = new ShelvesRepository();

class UserController {
  async store(request: Request, response: Response): Promise<Response> {
    const { name, password, nickname, email } = request.body;

    try {
      const createUserService = container.resolve(CreateUserService);

      const { _id } = await createUserService.execute({
        name,
        nickname,
        email,
        password,
      });

      await shelfRepository.createShelf({
        _id,
      });

      return response.json({
        _id,
        name,
        email,
      });
    } catch (error) {
      return response.status(400).json({
        error: error.message,
      });
    }
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    try {
      const { _id, name } = await userRepository.getUser({ email });

      return response.json({
        _id,
        name,
        email,
      });
    } catch (error) {
      return response.status(400).json({
        error: error.message,
      });
    }
  }

  async index(request: Request, response: Response): Promise<Response> {
    try {
      const users: responseCreateUserDTO[] = await userRepository.listUsers();
      return response.json(users);
    } catch (error) {
      return response.status(400).json({
        error: error.message,
      });
    }
  }
}

export default new UserController();
