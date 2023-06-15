import { prisma } from "../../../services/prisma";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export const createUser = async (data: ICreateUserDTO) => {
  const user = await prisma.user.create({
    data
  });

  return user;
}