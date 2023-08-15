import { User } from "@prisma/client";

export interface ICreateRelationshipDTO {
  partnerOne: User;
  partnerTwo: User;
  partnerOneId: string | undefined;
  partnerTwoId: string | undefined;
  startDate: Date;
}