import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  private updateUserUseCase: UpdateUserUseCase

  constructor(updateUserUseCase: UpdateUserUseCase) {
    this.updateUserUseCase = updateUserUseCase   
  }

  async updatePairEmail(userId: string, pairEmail: string): Promise<void> {
  
    try {  
      if (!userId) {
        throw new Error("User not found");
      }
  
      await this.updateUserUseCase.updatePairEmail(userId, pairEmail);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }
}

export { UpdateUserController }

