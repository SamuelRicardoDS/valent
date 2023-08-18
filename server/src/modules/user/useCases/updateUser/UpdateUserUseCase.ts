import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  pairEmail?: string;
}
class UpdateUserUseCase {
  constructor(
    private userRepository: IUserRepository
    ) {}
  
  async execute({id, name, email, password, pairEmail}: IRequest): Promise<void> {
    const user = await this.userRepository.findById(id)

    if(!user) {
      throw new Error("User not exist")
    }

    await this.userRepository.update(id, name, email, password, pairEmail)

  } 
}

export { UpdateUserUseCase }