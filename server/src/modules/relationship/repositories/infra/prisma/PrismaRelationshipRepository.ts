import { Relationship } from "@prisma/client";
import { ICreateRelationshipDTO } from "../../../dtos/ICreateRelationshipDTO";
import { IRelationshipRepository } from "../../IRelationshipRepository";
import { prisma } from "../../../../../services/prisma"
import { PrismaUserRepository }  from "../../../../user/repositories/infra/prisma/PrismaUserRepository"

const prismaUserRepository = new PrismaUserRepository();
class PrismaRelationshipRepository implements IRelationshipRepository {

    async create(data: ICreateRelationshipDTO): Promise<Relationship> {
      const relationship = await prisma.relationship.create({
        data
      });
      const partnerOne = await prismaUserRepository.findById(data.partnerOneId);
      const partnerTwo = await prismaUserRepository.findById(data.partnerTwoId);
      
      await prisma.user.update({
        where: {
          id: partnerOne?.id
        },
        data: {
          partnerId: partnerTwo?.id
        }
      });
      await prisma.user.update({
        where: {
          id: partnerTwo?.id
        },
        data: {
          partnerId: partnerOne?.id
        }
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