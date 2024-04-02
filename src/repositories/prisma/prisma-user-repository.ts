import type { IAutogen } from '@entities/Autogen';
import type { IUser } from '@entities/User';
import { prisma } from '@/prisma';
import type { UserRepository } from '../user-repository';

export class PrismaUserRepository implements UserRepository {
  async create(data: Omit<IUser, keyof IAutogen>): Promise<IUser> {
    try {
      const createdUser = await prisma.user.create({ data });
      return createdUser;
    } catch (err) {
      throw new Error(`Erro ao criar usuário : ${String(err)}`);
    }
  }

  async findOne(filter: Partial<IUser>): Promise<IUser> {
    try {
      const user = await prisma.user.findFirstOrThrow({ where: filter });
      return user;
    } catch (error) {
      throw new Error(`Erro ao tentar encontrar o usuário : ${String(error)}`);
    }
  }

  async findAll(filter?: Partial<IUser>): Promise<IUser[]> {
    try {
      const user = filter
        ? await prisma.user.findMany({ where: filter })
        : await prisma.user.findMany();
      return user;
    } catch (error) {
      throw new Error(`Erro ao tentar encontrar o usuário : ${String(error)}`);
    }
  }

  async update(
    filter: Partial<IUser>,
    data: Partial<Omit<IUser, keyof IAutogen>>,
  ): Promise<void> {
    try {
      await prisma.user.updateMany({ where: filter, data });
    } catch (error) {
      throw new Error(
        `Erro ao tentar atualizar informações do usuário : ${String(error)}`,
      );
    }
  }

  async delete(filter: Partial<IUser>): Promise<void> {
    try {
      await prisma.user.deleteMany({ where: filter });
    } catch (error) {
      throw new Error(`Erro ao tentar deletar o usuário : ${String(error)}`);
    }
  }
}
