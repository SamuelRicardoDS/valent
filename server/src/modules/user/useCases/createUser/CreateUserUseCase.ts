import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import bcrypt from 'bcryptjs';

class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async execute(data: ICreateUserDTO): Promise<void> {

    if(!data.email || !data.name || !data.password) {
      throw new Error("Missing data (parameters)");
    }

    const userAlreadyExists = await this.userRepository.findByEmail(data.email);
    if(userAlreadyExists) {
      throw new Error("User already exists");
    }
    
    const hashPassword = await bcrypt.hash(data.password, 8);
    data.password = hashPassword;

    await this.userRepository.create(data);
  }
}

export { CreateUserUseCase }