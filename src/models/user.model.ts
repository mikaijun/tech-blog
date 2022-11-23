import { UserEntity, UserSaveInput } from 'src/entities/user.entity';

export class User {
  public readonly id!: number | null;
  public readonly name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date | null;

  constructor(
    record: Pick<User, 'id' | 'name' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ) {
    Object.assign(this, record);
  }

  public static fromDataBase(record: UserEntity): User {
    return new User({
      id: record.id,
      name: record.name,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      deletedAt: record.deletedAt,
    });
  }

  public static toDataBase(user: User): UserEntity {
    const data = {
      id: user.id,
      name: user.name,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      deletedAt: user.deletedAt,
    };
    return data;
  }

  public static create(data: UserSaveInput): User {
    return new User({
      id: null,
      name: data.name,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    });
  }

  public update(data: UserSaveInput): User {
    return new User({
      id: this.id,
      name: data.name,
      createdAt: this.createdAt,
      updatedAt: new Date(),
      deletedAt: null,
    });
  }

  public delete(): User {
    return new User({
      id: this.id,
      name: this.name,
      createdAt: this.createdAt,
      updatedAt: new Date(),
      deletedAt: new Date(),
    });
  }
}
