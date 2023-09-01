import { Relationship } from "@prisma/client";
import { ICreateRelationshipDTO } from "../../../dtos/ICreateRelationshipDTO";
import { IRelationshipRepository } from "../../IRelationshipRepository";
import { prisma } from "../../../../../services/prisma"

class PrismaRelationshipRepository implements IRelationshipRepository {

    async create(data: ICreateRelationshipDTO): Promise<Relationship> {
      const relationship = await prisma.relationship.create({
        data
      });
      return relationship;
    }

    async findByPartnerId(userId: string): Promise<Relationship | null> {
        const relationship = await prisma.relationship.findFirst({
          where: {
            OR: [
              {partnerOneId: userId},
              {partnerTwoId: userId}
            ]
          }
        })
        return relationship;
    }

    async read(id: string): Promise<Relationship | null> {
        const relatioship = await prisma.relationship.findUnique({
          where: {
            id
          }
        })
        return relatioship;
    }
}

export { PrismaRelationshipRepository }