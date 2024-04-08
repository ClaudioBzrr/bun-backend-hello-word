import type { ICreateUserPayload } from '@/entities/User';
import { BunPasswordRepository } from '@/repositories/bun/bun-password-repository';
import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository';
import { CreateUserUseCase } from '@/use-cases/create-user-use-case';
import { Elysia } from 'elysia';

const userRepository = new PrismaUserRepository();
const passwordRepository = new BunPasswordRepository();

export class UserController {
  async createUser(data: ICreateUserPayload) {
    try {
      const createUserUseCase = new CreateUserUseCase(
        userRepository,
        passwordRepository,
      );
      const user = await createUserUseCase.exec(data);
      return user;
    } catch (err) {
      throw new Error(String(err));
    }
  }
}
