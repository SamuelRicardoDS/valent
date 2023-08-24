import { IRelationshipRepository } from "../../repositories/IRelationshipRepository";
import { ICreateRelationshipDTO } from "../../dtos/ICreateRelationshipDTO";

class CreateRelationshipUseCase {
  constructor(
    private relationshipRepository: IRelationshipRepository,
  ) {}
  
  async execute(data: ICreateRelationshipDTO): Promise<void> {

    const partnerOneAlreadyInRelationship = await this.relationshipRepository.findByPartnerId(data.partnerOneId);
    const partnerTwoAlreadyInRelationship = await this.relationshipRepository.findByPartnerId(data.partnerTwoId);
    if(partnerOneAlreadyInRelationship || partnerTwoAlreadyInRelationship){
      throw new Error("One of the partners is already in a relationship");
    }

    await this.relationshipRepository.create(data);
  }
}

export { CreateRelationshipUseCase };