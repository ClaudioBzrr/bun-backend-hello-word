import type { PasswordRepository } from '../password-repository';

export class BunPasswordRepository implements PasswordRepository {
  async hash({ password }: { password: string }): Promise<string> {
    try {
      const passwordHash = await Bun.password.hash(password, {
        algorithm: 'bcrypt',
      });
      return passwordHash;
    } catch (err) {
      throw new Error(`Error ao gerar senha : ${String(err)}`);
    }
  }

  async compare({
    password,
    hash,
  }: {
    password: string;
    hash: string;
  }): Promise<boolean> {
    try {
      const passwordMatch = await Bun.password.verify(password, hash);
      return passwordMatch;
    } catch (err) {
      throw new Error(`Error ao comparar senha : ${String(err)}`);
    }
  }
}
