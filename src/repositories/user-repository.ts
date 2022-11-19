import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';
@Injectable()
export class UsersRepository {
  // MEMO: DBから取得する代わり
  private readonly users: User[] = [
    { id: 1, name: 'ジョン', createdAt: new Date(), deletedAt: null },
    { id: 2, name: 'マイケル', createdAt: new Date(), deletedAt: null },
  ];
  findAll() {
    return this.users;
  }
}
