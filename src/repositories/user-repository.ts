import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';
@Injectable()
export class UsersRepository {
  // MEMO: DBから取得する代わり
  private users: User[] = [
    { id: 1, name: 'ジョン', createdAt: new Date(), deletedAt: null },
    { id: 2, name: 'マイケル', createdAt: new Date(), deletedAt: null },
  ];

  findAll() {
    return this.users;
  }

  findById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  // MEMO: UPSERTの代わり
  save(saveUser: User): User {
    const data = {
      name: saveUser.name,
      createdAt: saveUser.createdAt,
      deletedAt: saveUser.deletedAt,
    };
    if (saveUser.id) {
      this.users = this.users.map((user) => {
        if (user.id === saveUser.id) {
          return {
            id: saveUser.id,
            ...data,
          };
        } else return user;
      });
      return saveUser;
    } else {
      const newUser = {
        id: this.users.length + 1,
        ...data,
      };
      this.users = [...this.users, newUser];
      return newUser;
    }
  }
}
