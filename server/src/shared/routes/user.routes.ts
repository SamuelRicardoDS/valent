import { Router } from 'express';
import { CreateUserController } from '../../modules/user/useCases/createUser/CreateUserController';

export const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post('/', createUserController.handle);