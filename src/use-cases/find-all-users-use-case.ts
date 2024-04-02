import type { UserRepository } from '@repositories/user-repository';

export class FindAllUsersUseCase {
  constructor(private userRepository: UserRepository) {}
  async exec() {
    try {
      const users = await this.userRepository.findAll();
      return users;
    } catch (error) {
      throw new Error(String(error));
    }
  }
}
