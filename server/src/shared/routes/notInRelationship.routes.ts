import { Router } from "express";
import { PrismaUserRepository } from "../../modules/user/repositories/infra/prisma/PrismaUserRepository";
import { UpdateUserController } from "../../modules/user/useCases/updateUser/UpdateUserController";
import { UpdateUserUseCase } from "../../modules/user/useCases/updateUser/UpdateUserUseCase";

const prismaUserRepository = new PrismaUserRepository;

const updateUserUseCase = new UpdateUserUseCase(prismaUserRepository)
const updateUserController = new UpdateUserController(updateUserUseCase)

export const notInRelationshipRoutes = Router();

notInRelationshipRoutes.patch('/send-pairemail/:userId', async (request, response) => {
  try {
    const { pairEmail } = request.body
    return updateUserController.handle(request, response);
  } catch (error) {
    console.error("Error updating pair email:", error);
    return response.status(500).send({ message: "Failed to update pair email" });
  }
})