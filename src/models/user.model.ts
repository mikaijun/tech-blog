export class User {
  public readonly id!: number | null;
  public readonly name!: string;
  public readonly createdAt!: Date;
  public readonly deletedAt!: Date | null;

  constructor(record: Pick<User, 'id' | 'name' | 'createdAt' | 'deletedAt'>) {
    Object.assign(this, record);
  }

  public static fromDataBase(record: User): User {
    return new User({
      id: record.id,
      name: record.name,
      createdAt: record.createdAt,
      deletedAt: record.deletedAt,
    });
  }

  public static create(data: Pick<User, 'name'>): User {
    return new User({
      id: null,
      name: data.name,
      createdAt: new Date(),
      deletedAt: null,
    });
  }

  public static update(
    data: Pick<User, 'name' | 'deletedAt'>,
    user: User,
  ): User {
    return new User({
      id: user.id,
      name: data.name,
      createdAt: user.createdAt,
      deletedAt: data.deletedAt ?? null,
    });
  }
}
