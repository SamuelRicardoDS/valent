import { comparePasswords } from "../utils/ComparePasswords"
import { generateAuthToken } from "../utils/GenerateAuthToken"
import { IUserRepository } from "../../repositories/IUserRepository"

interface ILoginUserDTO {
  email: string;
  password: string;
}

export interface ILoginUserResponse {
  token: string;
}

class LoginUserUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {}
  
  async execute(data: ILoginUserDTO): Promise<ILoginUserResponse>{
    const { email, password } = data;

    const user = await this.userRepository.findByEmail(email);

    if(!user) {
      throw new Error("User not found");
    }

    const passwordMatch = await comparePasswords(password, user.password);

    if(!passwordMatch) {  
      throw new Error("Incorrect password");
    }

    const token = generateAuthToken(user.id);

    return { token };
  }

}

export { LoginUserUseCase }