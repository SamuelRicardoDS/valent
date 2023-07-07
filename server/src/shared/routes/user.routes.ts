import { Router } from 'express';
import { PrismaUserRepository } from '../../modules/user/repositories/infra/prisma/PrismaUserRepository';
import { CreateUserUseCase } from '../../modules/user/useCases/createUser/CreateUserUseCase';
import { CreateUserController } from '../../modules/user/useCases/createUser/CreateUserController'
import { LoginUserUseCase } from '../../modules/user/useCases/loginUser/LoginUserUseCase';
import { LoginUserController } from '../../modules/user/useCases/loginUser/LoginUserController';

export const userRoutes = Router();

const prismaUserRepository = new PrismaUserRepository();

const createUserUseCase = new CreateUserUseCase(prismaUserRepository);
const createUserController = new CreateUserController(createUserUseCase);


const loginUserUseCase = new LoginUserUseCase(prismaUserRepository);
const loginUserController = new LoginUserController(loginUserUseCase);

userRoutes.post('/sign-up', (request, response) => {
  return createUserController.handle(request, response);
});

userRoutes.post('/sign-in', (request, response) => {
  return loginUserController.handle(request, response);
});