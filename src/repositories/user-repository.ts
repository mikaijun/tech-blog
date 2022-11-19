import { Injectable } from '@nestjs/common';
import { User } from 'src/graphql.schema';
@Injectable()
export class UsersRepository {
  private readonly users: User[] = [
    { id: 1, name: 'ジョン', createdAt: 123456789 },
    { id: 2, name: 'マイケル', createdAt: 123456789 },
  ];
  findAll() {
    return this.users;
  }
}
