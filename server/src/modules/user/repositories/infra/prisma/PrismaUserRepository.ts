import { User } from "@prisma/client";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { prisma } from "../../../../../services/prisma";
import { IUserRepository } from "../../IUserRepository";

class PrismaUserRepository implements IUserRepository { 

  async create(data: ICreateUserDTO): Promise<User> { 
    const user = await prisma.user.create({
      data
    });
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });
    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    });
    return user;
  }

  async update(id: string, name?: string , email?: string , password?: string , pairEmail?: string ): Promise<User | null> {
    const user = await prisma.user.update({
      where: {
        id
      },
      data: {
        name,
        email,
        password,
        pairEmail,
      }
    })
    return user;
  }

  async updatePairEmail(id: string, pairEmail: string): Promise<User | null> {
    const user = await prisma.user.update({
      where: {
        id
      },
      data: {
        pairEmail 
      }
    });
    return user;
  }
  
}

export { PrismaUserRepository }
