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
}

export { PrismaUserRepository }
