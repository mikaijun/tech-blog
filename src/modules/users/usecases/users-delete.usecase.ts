import { Injectable } from '@nestjs/common';

import { User } from 'src/models/user.model';
import { ArticlesRepository } from 'src/repositories/article-repository';
import { UsersRepository } from 'src/repositories/user-repository';

@Injectable()
export class UserDeleteUseCase {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly articleRepository: ArticlesRepository,
  ) {}

  /**
   * ユーザーを削除する
   */
  async invoke(userId: number): Promise<User> {
    const user = await this.usersRepository.findById(userId);
    const deleteUser = await this.usersRepository.save(user.delete());
    const deleteArticles = await this.articleRepository.findByUserId(userId);
    // TODO: 削除したユーザーの記事にdeleted_atを更新する
    console.log(deleteArticles);
    return await this.usersRepository.save(deleteUser);
  }
}
