import { Router } from 'express';
import { CreateUserController } from '../../modules/user/useCases/createUser/CreateUserController';
import { CreateUserUseCase } from '../../modules/user/useCases/createUser/CreateUserUseCase';
import { PrismaUserRepository } from '../../modules/user/repositories/infra/prisma/PrismaUserRepository';

export const userRoutes = Router();

const prismaUserRepository = new PrismaUserRepository();
console.log(prismaUserRepository);

const createUserUseCase = new CreateUserUseCase(prismaUserRepository);
console.log(createUserUseCase);

const createUserController = new CreateUserController(createUserUseCase);
console.log(createUserController);

userRoutes.post('/', createUserController.handle);