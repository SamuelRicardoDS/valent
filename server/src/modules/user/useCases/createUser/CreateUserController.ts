import { Request, Response } from "express"
import { CreateUserUseCase } from "./CreateUserUseCase"

class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {

    try {
      const { email, name, password } = req.body

      await this.createUserUseCase.execute({
        email,
        name,
        password
      })
      return res.status(201).send()
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}

export { CreateUserController }