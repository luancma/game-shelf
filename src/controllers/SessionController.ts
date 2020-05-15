import { Request, Response } from "express";
import CreateSessionService from "../services/CreateSessionService";
import UsersRepository from "../repositories/UsersRepository";

const userRepository = new UsersRepository();

class SessionController {
  async store(request: Request, response: Response) {
    const { email, password } = request.body;

    try {
      const sessionService = new CreateSessionService(userRepository);

      const { user, token } = await sessionService.execute({
        email,
        password
      });

      const { _id, name } = user;

      response.json({ _id, name, email, token });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export default new SessionController();
