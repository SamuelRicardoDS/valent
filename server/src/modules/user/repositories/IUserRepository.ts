import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from '@prisma/client'

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  update(id: string, name?: string, email?: string, password?: string, pairEmail?: string): Promise<User | null>;
  updatePairEmail(id: string, pairEmail: string): Promise<User | null>;
}

  