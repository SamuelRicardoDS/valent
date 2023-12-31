import { Router } from "express";
import { PrismaUserRepository } from "../../modules/user/repositories/infra/prisma/PrismaUserRepository";
import { UpdateUserController } from "../../modules/user/useCases/updateUser/UpdateUserController";
import { UpdateUserUseCase } from "../../modules/user/useCases/updateUser/UpdateUserUseCase";
import { CreateRelationshipUseCase } from "../../modules/relationship/useCases/createRelationship/CreateRelationshipUseCase";
import { PrismaRelationshipRepository } from "../../modules/relationship/repositories/infra/prisma/PrismaRelationshipRepository";

const prismaUserRepository = new PrismaUserRepository;
const prismaRelationshipRepository = new PrismaRelationshipRepository;
const createRelationshipUseCase = new CreateRelationshipUseCase(prismaRelationshipRepository);

const updateUserUseCase = new UpdateUserUseCase(prismaUserRepository)
const updateUserController = new UpdateUserController(updateUserUseCase, prismaUserRepository, createRelationshipUseCase)

export const notInRelationshipRoutes = Router();

notInRelationshipRoutes.patch('/send-pairemail/:userId', async (request, response) => {
  try {
    const userId = request.params.userId;
    const { pairEmail } = request.body;
    
    await updateUserController.updatePairEmail(userId, pairEmail);
    return response.status(200).send({ message: "Pair email sent" });
  } catch (error) {
    console.error("Error updating user:", error);
    return response.status(500).send({ message: "Failed to update user" });
  }
});

notInRelationshipRoutes.get('/check-relationship/:userId', async (request, response) => {
  try {
    const userId = request.params.userId;
    const relationship = await prismaRelationshipRepository.findByPartnerId(userId);
    if (relationship) {
      response.status(200).send({ message: "User is in a relationship" });
      console.log("User is in a relationship");
    } else {
      response.status(200).send({ message: "User is not in a relationship" });
      console.log("User is not in a relationship");
    }
  } catch (error) {
    response.status(500).send({ message: "Failed to check relationship" });
    console.error("Failed to check relationship:", error);
  }
});