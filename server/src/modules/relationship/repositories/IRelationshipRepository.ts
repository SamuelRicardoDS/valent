import { ICreateRelationshipDTO } from "../dtos/ICreateRelationshipDTO";
import { Relationship } from '@prisma/client'

export interface IRelationshipRepository {
  create(data: ICreateRelationshipDTO): Promise<Relationship>;
  findByPartnerId(userOneId: string): Promise<Relationship | null>;
  read(id: string): Promise<Relationship | null>;
}