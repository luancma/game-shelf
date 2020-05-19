export interface requestCreateUserDTO {
  name: string;
  email: string;
  nickname: string;
  password: string;
}

export interface responseCreateUserDTO {
  _id: string;
  name: string;
  email: string;
  nickname: string;
  password: string;
  created_at: Date;
}
