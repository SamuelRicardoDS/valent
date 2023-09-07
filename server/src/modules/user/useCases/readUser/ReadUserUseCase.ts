import { IUserRepository } from "../../repositories/IUserRepository";
import { User } from "@prisma/client";

class ReadUserUseCase {
  constructor(
    private userRepository: IUserRepository
    ) {}
  
  async execute(userId: string): Promise<User | null> {
    const user = await this.userRepository.findById(userId)

    if(!user) {
      throw new Error("User not exist")
      return null;
    }
    return user;
  }
}

export { ReadUserUseCase }