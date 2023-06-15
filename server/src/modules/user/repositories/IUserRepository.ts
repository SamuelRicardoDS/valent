import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from '@prisma/client'

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}

  