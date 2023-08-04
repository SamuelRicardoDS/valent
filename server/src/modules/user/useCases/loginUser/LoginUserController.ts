import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";
import { ILoginUserResponse } from "./LoginUserUseCase";

class LoginUserController {
  constructor(private loginUserUseCase: LoginUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      const { token }: ILoginUserResponse = await this.loginUserUseCase.execute({ email, password })
      
      return res.json({ token });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { LoginUserController };
