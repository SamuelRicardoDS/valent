import { IRelationshipRepository } from "../../repositories/IRelationshipRepository";
import { ICreateRelationshipDTO } from "../../dtos/ICreateRelationshipDTO";

class CreateRelationshipUseCase {
  constructor(
    private relationshipRepository: IRelationshipRepository,
  ) {}
  
  async execute(data: ICreateRelationshipDTO): Promise<void> {
    await this.relationshipRepository.create(data);
  }
}

export { CreateRelationshipUseCase };