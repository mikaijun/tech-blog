import { Injectable } from '@nestjs/common';

import { User } from 'src/models/user.model';
import { UsersRepository } from 'src/repositories/user-repository';

@Injectable()
export class UserDeleteUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  /**
   * ユーザーを削除する
   */
  async invoke(userId: number): Promise<User> {
    const user = await this.usersRepository.findById(userId);
    const deleteUser = await this.usersRepository.save(user.delete());
    return await this.usersRepository.save(deleteUser);
  }
}
