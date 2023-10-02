import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUserRepository } from "./IUserRepository";
import { User } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';

export class MockUserRepository implements IUserRepository {
    private usersRepository: User[] = [];


    async create(data: ICreateUserDTO): Promise<User> {
        const { name, email, password } = data;
        const id = uuidv4()
        const user: User = Object.assign({
            id,
            name,
            email,
            password,
        })
        this.usersRepository.push(user);
        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.usersRepository.find((user) => user.email == email) || null;
    }

    async findById(id: string): Promise<User | null> {
        return this.usersRepository.find((user) => user.id == id) || null;    
    }

    async update(id: string, name?: string | undefined, email?: string | undefined, password?: string | undefined, pairEmail?: string | undefined): Promise<User | null> {
        return this.usersRepository.find((user) => user.id == id) || null;
    }

    async updatePairEmail(id: string, pairEmail: string): Promise<User | null> {
        return this.usersRepository.find((user) => user.id == id) || null;
    }
    
}
