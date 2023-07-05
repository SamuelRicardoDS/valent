import { Router } from 'express';
import { PrismaUserRepository } from '../../modules/user/repositories/infra/prisma/PrismaUserRepository';
import { CreateUserUseCase } from '../../modules/user/useCases/createUser/CreateUserUseCase';
import { CreateUserController } from '../../modules/user/useCases/createUser/CreateUserController'

export const userRoutes = Router();

const prismaUserRepository = new PrismaUserRepository();

const createUserUseCase = new CreateUserUseCase(prismaUserRepository);

const createUserController = new CreateUserController(createUserUseCase);

userRoutes.post('/sign-up', (request, response) => {
  return createUserController.handle(request, response);
});