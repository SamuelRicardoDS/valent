import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateRelationshipDTO } from "../../../relationship/dtos/ICreateRelationshipDTO";
import { CreateRelationshipUseCase } from "../../../relationship/useCases/createRelationship/CreateRelationshipUseCase";

class UpdateUserController {
  private updateUserUseCase: UpdateUserUseCase
  private createRelationshipUseCase: CreateRelationshipUseCase
  private userRepository: IUserRepository

  constructor(updateUserUseCase: UpdateUserUseCase, userRepository: IUserRepository, createRelationshipUseCase: CreateRelationshipUseCase) {
    this.updateUserUseCase = updateUserUseCase 
    this.userRepository = userRepository
    this.createRelationshipUseCase = createRelationshipUseCase
  }

  async updatePairEmail(userId: string, pairEmail: string): Promise<void> {
    try {  

      await this.updateUserUseCase.updatePairEmail(userId, pairEmail);

      if (!userId) {
        throw new Error("User not found");
      }

      const user = await this.userRepository.findById(userId);
      const userOfPairEmail = await this.userRepository.findByEmail(pairEmail);
      if (!userOfPairEmail || !user) {
        throw new Error("User not found");
      }
      
      if(userOfPairEmail.pairEmail === user.email) {
        const createRelationshipData: ICreateRelationshipDTO = {
          partnerOneId: user.id,
          partnerTwoId: userOfPairEmail.id,
          startDate: new Date(),
        }
        await this.createRelationshipUseCase.execute(createRelationshipData);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }
}

export { UpdateUserController }

