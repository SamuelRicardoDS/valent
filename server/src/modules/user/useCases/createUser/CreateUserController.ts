import { Request, Response } from "express"

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { email, name, enrollment, password, cellphone, instagram } = req.body

  }
}

export { CreateUserController }