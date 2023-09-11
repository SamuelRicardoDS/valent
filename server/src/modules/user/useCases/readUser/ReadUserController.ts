import { Request, Response } from "express";
import { ReadUserUseCase } from "./ReadUserUseCase";

class ReadUserController {
  constructor(private readUserUseCase: ReadUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const user = await this.readUserUseCase.execute(id);
      return response.status(200).json({ user });
    } catch (error) {
      return response.status(500).json({ message: "Failed to read user" });
    }
  }
}

export { ReadUserController };