import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

export class CreateUserUseCase {
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
    
    await this.userRepository.create(data);
  }
}