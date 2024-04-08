import { Elysia, t } from 'elysia';
import { PrismaUserRepository } from './repositories/prisma/prisma-user-repository';
import { BunPasswordRepository } from './repositories/bun/bun-password-repository';
import { CreateUserUseCase } from './use-cases/create-user-use-case';

export const route = new Elysia();

const userRepository = new PrismaUserRepository();
const passwordRepository = new BunPasswordRepository();

route.post(
  '/create-user',
  async ({ body }) => {
    try {
      const createUserUseCase = new CreateUserUseCase(
        userRepository,
        passwordRepository,
      );
      const user = createUserUseCase.exec(body);
      return user;
    } catch (err) {
      return err;
    }
  },
  {
    body: t.Object({
      email: t.String({ format: 'email', error: 'Email inválido' }),
      name: t.String(),
      password: t.String(),
    }),
  },
);
