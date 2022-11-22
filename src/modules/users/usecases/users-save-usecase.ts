import { Injectable } from '@nestjs/common';
import { UserSaveInput } from 'src/entities/user.entity';

import { User } from 'src/models/user.model';
import { UsersRepository } from 'src/repositories/user-repository';

@Injectable()
export class UserSaveUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  /**
   * ユーザーを保存する
   */
  async invoke(input: UserSaveInput) {
    if (input.id) {
      const user = await this.usersRepository.findById(input.id);
      return this.usersRepository.save(user.update(input));
    }
    return this.usersRepository.save(User.create(input));
  }
}
