import { Event } from "@prisma/client";
import { prisma } from "../../../../services/prisma";
import { ICreateEventDTO } from "../../dtos/ICreateEventDTO";
import { IEventRepository } from "../IEventRepository";

class PrismaEventRepository implements IEventRepository {
    async create(data: ICreateEventDTO): Promise<Event> {
        const event = await prisma.event.create({
            data
        })
        return event;
    }
}

export { PrismaEventRepository }