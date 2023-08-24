import { Response } from 'express';
import { CreateRelationshipUseCase } from './CreateRelationshipUseCase';
import { AuthenticatedRequest } from '../../../../shared/middlewares/AuthMiddleware';
class CreateRelationshipController {
  private createRelationshipUseCase: CreateRelationshipUseCase;

  constructor(createRelationsihpUseCase: CreateRelationshipUseCase) {
    this.createRelationshipUseCase = createRelationsihpUseCase;
  }

  async handle(req: AuthenticatedRequest, res: Response): Promise<Response> {
    try {
      const { startDate, partnerTwoId } = req.body;
      if(!startDate || !partnerTwoId){
        return res.status(400).send();
      }
      if(!req.userId){
        return res.status(401).send({message: "User Id missing"});
      }
      const partnerOneId = req.userId

      await this.createRelationshipUseCase.execute({
        partnerOneId,
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