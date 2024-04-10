import type { ICreateUserPayload } from '@/entities/User';
import { BunPasswordRepository } from '@/repositories/bun/bun-password-repository';
import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository';
import { CreateUserUseCase } from '@/use-cases/create-user-use-case';
import { FindAllUsersUseCase } from '@/use-cases/find-all-users-use-case';

export class UserController {
  private userRepository = new PrismaUserRepository();
  private passwordRepository = new BunPasswordRepository();

  async create(data: ICreateUserPayload) {
    try {
      const createUserUseCase = new CreateUserUseCase(
        this.userRepository,
        this.passwordRepository,
      );
      const user = createUserUseCase.exec(data);
      return user;
    } catch (err) {
      throw new Error(String(err));
    }
  }

  async findAll() {
    try {
      const findAllUsersUseCase = new FindAllUsersUseCase(this.userRepository);
      const users = findAllUsersUseCase.exec();
      return users;
    } catch (err) {
      throw new Error(String(err));
    }
  }
}
