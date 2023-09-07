import { Router } from "express";
import { ReadUserUseCase } from "../../modules/user/useCases/readUser/ReadUserUseCase";
import { ReadUserController } from "../../modules/user/useCases/readUser/ReadUserController";
import { PrismaUserRepository } from "../../modules/user/repositories/infra/prisma/PrismaUserRepository";

const prismaUserRepository = new PrismaUserRepository;

const readUserUseCase = new ReadUserUseCase(prismaUserRepository);
const readUserController = new ReadUserController(readUserUseCase);

export const inRelationshipRoutes = Router();

inRelationshipRoutes.get("/read-user/:id", async (request, response) => {
    try {
        await readUserController.handle(request, response);
    } catch (error) {
        console.log(error);
    }
    });