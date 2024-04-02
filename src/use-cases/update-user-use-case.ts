import type { IUpdatedUserPayload } from '@/entities/User';
import type { PasswordRepository } from '@/repositories/password-repository';
import type { UserRepository } from '@/repositories/user-repository';

export class UpdateUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private passwordRepository: PasswordRepository,
  ) {}

  async exec({ filter, data }: IUpdatedUserPayload) {
    try {
      if ('password' in data) {
        data.password = await this.passwordRepository.hash({
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          password: data.password!,
        });
      }
      await this.userRepository.update(filter, data);
    } catch (error) {
      throw new Error(String(error));
    }
  }
}
