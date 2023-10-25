import { Relationship } from '@prisma/client';
import { IRelationshipRepository } from "../../repositories/IRelationshipRepository"

class ReadRelationshipUseCase {
  constructor(private relationshipRepository: IRelationshipRepository) {}

  async execute(id: string): Promise<Relationship> {
    const relationship = await this.relationshipRepository.read(id);

    if (!relationship) {
      throw new Error('Relationship not found');
    }

    return relationship;
  }
  async executeByUserId(userId: string): Promise<Relationship> {
    const relationship = await this.relationshipRepository.findByPartnerId(userId);

    if (!relationship) {
      throw new Error('Relationship not found for user');
    }

    return relationship;
  }
}

export { ReadRelationshipUseCase }