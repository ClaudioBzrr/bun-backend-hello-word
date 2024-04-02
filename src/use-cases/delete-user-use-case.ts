import type { IFilterUserPayload } from '@/entities/User';
import type { UserRepository } from '@/repositories/user-repository';

export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async exec(filter: IFilterUserPayload) {
    try {
      await this.userRepository.delete(filter);
    } catch (error) {
      throw new Error(String(error));
    }
  }
}
