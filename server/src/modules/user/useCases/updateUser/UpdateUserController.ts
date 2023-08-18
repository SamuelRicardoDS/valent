import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { Response } from "express";
import { AuthenticatedRequest } from "../../../../shared/middlewares/AuthMiddleware";

class UpdateUserController {
  private updateUserUseCase: UpdateUserUseCase

  constructor(updateUserUseCase: UpdateUserUseCase) {
    this.updateUserUseCase = updateUserUseCase   
  }

  async handle(req: AuthenticatedRequest, res: Response): Promise<Response> {
    try {
      const { name, email, password, pairEmail } = req.body;
      const userId = req.userId;
  
      if (!userId) {
        return res.status(400).send({ message: "User ID missing" });
      }
  
      await this.updateUserUseCase.execute({
        id: userId,
        name,
        email,
        password,
        pairEmail,
      });
      return res.status(200).send({ message: "User updated successfully" });
    } catch (error) {
      console.error("Error updating user:", error);
      return res.status(500).send({ message: "Failed to update user" });
    }
  }
}

export { UpdateUserController }

