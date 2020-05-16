import { Request, Response } from "express";
import UsersRepository from "../repositories/UsersRepository";
import CreateUserService from "../services/CreateUserService";

const userRepository = new UsersRepository();

class UserController {
  async store(request: Request, response: Response): Promise<Response> {
    const { name, password, nickname, email } = request.body;

    try {
      const createUserService = new CreateUserService(userRepository);

      const { _id } = await createUserService.execute({
        name,
        nickname,
        email,
        password
      });

      return response.json({
        _id,
        name,
        email
      });
    } catch (error) {
      return response.status(400).json({
        error: error.message
      });
    }
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;
    
    try {
      const { _id, name } = await userRepository.getUser({email});

      return response.json({
        _id,
        name,
        email
      });
    } catch (error) {
      return response.status(400).json({
        error: error.message
      });
    }
  }
}

export default new UserController();
