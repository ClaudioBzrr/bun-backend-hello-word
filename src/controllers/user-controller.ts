import type { HttpController, HttpResponse } from '@/entities/Controller';
import type { ICreateUserPayload } from '@/entities/User';
import { BunPasswordRepository } from '@/repositories/bun/bun-password-repository';
import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository';
import { CreateUserUseCase } from '@/use-cases/create-user-use-case';

const userRepository = new PrismaUserRepository();
const passwordRepository = new BunPasswordRepository();

export class UserController implements HttpController {
  async handle(body: ICreateUserPayload): Promise<HttpResponse> {
    const createUserUseCase = new CreateUserUseCase(
      userRepository,
      passwordRepository,
    );

    const data = await createUserUseCase.exec(body);

    return {
      statusCode: '200',
      data,
    };
  }
}
