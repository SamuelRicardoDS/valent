import { Event } from '@prisma/client'
import { ICreateEventDTO } from '../dtos/ICreateEventDTO'

export interface IEventRepository {
    create(data: ICreateEventDTO): Promise<Event>
}