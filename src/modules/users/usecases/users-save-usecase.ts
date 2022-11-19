import { Injectable } from '@nestjs/common';

import { User } from 'src/models/user.model';
import { UsersRepository } from 'src/repositories/user-repository';

@Injectable()
export class UserSaveUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  /**
   * ユーザーを保存する
   */
  invoke(input: any): User {
    if (input.id) {
      const user = this.usersRepository.findById(input.id);
      return this.usersRepository.save(User.update(user, input));
    }
    return this.usersRepository.save(User.create(input));
  }
}
