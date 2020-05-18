import User from '../models/User';

interface UserSign {
  email: string;
  password: string;
}

class SessionRepository {
  async createSession({ email, password }: UserSign): Promise<any> {}
}

export default SessionRepository;
