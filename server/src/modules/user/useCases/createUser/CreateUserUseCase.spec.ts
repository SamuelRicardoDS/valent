import { test, describe, beforeEach, expect } from 'vitest'
import { CreateUserUseCase } from './CreateUserUseCase'
import { MockUserRepository } from '../../repositories/MockUserRepository'

let createUserUseCae: CreateUserUseCase
let mockUserRepository: MockUserRepository

describe("Create User", () => {
    beforeEach(() => {
        mockUserRepository = new MockUserRepository()
        createUserUseCae = new CreateUserUseCase(mockUserRepository)
    })

    test('should be able to create a new user', async () => {
        const user = await createUserUseCae.execute(
            {
                name: "John Doe",
                email: "johnjohn@email.com",
                password: "123456"
            }
        )
        console.log("ALO ALO", {user})
        expect(user).toHaveProperty("id")
    })

    test('should not be able to create a user that already exists', async () => {
        const user = await createUserUseCae.execute(
            {
                name: "John Doe",
                email: "jo@gmail.com",
                password: "123456"
            }
        )
        expect(user).toHaveProperty('id')
        const user2 = await createUserUseCae.execute(
            {
                name: "John Doe",
                email: "jo@gmail.com",
                password: "123456"
            }
        )
        expect(user2).toBe(null)
    })
})
