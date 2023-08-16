import { Request, Response } from 'express';
import { CreateRelationshipUseCase } from './CreateRelationshipUseCase';
import { AuthenticatedRequest } from '../../../../shared/middlewares/AuthMiddleware';
class CreateRelationshipController {
  private createRelationshipUseCase: CreateRelationshipUseCase;

  constructor(createRelationsihpUseCase: CreateRelationshipUseCase) {
    this.createRelationshipUseCase = createRelationsihpUseCase;
  }

  async handle(req: AuthenticatedRequest, res: Response): Promise<Response> {
    try {
      const { startDate, partnerOne, partnerTwo, partnerTwoId } = req.body;
      const partnerOneId = req.userId

      await this.createRelationshipUseCase.execute({
        partnerOne,
        partnerOneId,
        partnerTwo,
        partnerTwoId,
        startDate
      })

      return res.status(201).send()
    } catch (error) {
      return res.status(404). send();
    }
  }
}

export { CreateRelationshipController }