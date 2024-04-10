import type { ICreateUserPayload } from '@/entities/User';
import type { PasswordRepository } from '@/repositories/password-repository';
import type { UserRepository } from '@/repositories/user-repository';

export class CreateUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private passwordRepository: PasswordRepository,
  ) {}

  async exec(data: ICreateUserPayload) {
    try {
      data.password = await this.passwordRepository.hash({
        password: data.password,
      });
      const user = await this.userRepository.create(data);
      return user;
    } catch (err) {
      throw new Error(String(err));
    }
  }
}
