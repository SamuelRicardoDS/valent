import { User } from "@prisma/client";

export interface ICreateRelationshipDTO {
  partnerOne: User;
  partnerTwo: User;
  partnerOneId: string;
  partnerTwoId: string;
  startDate: Date;
}