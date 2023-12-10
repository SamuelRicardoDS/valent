export interface ICreateEventDTO {
    name: string;
    date: Date;
    description: string;
    location?: string;
    relationshipId: string;
}