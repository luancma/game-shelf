interface IUser {
    name: string;
    email: string;
    nickname: string;
    password: string;
}

interface IUsersRepository {
    createUSer({
        name,
        email,
        nickname,
        password
    }: IUser): Promise<IUser | null> 
}