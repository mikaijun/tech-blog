import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';
@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<User[]> {
    const rows = await this.userRepository.find();
    return rows.map((row) => User.fromDataBase(row));
  }

  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    return User.fromDataBase(user);
  }

  async save(saveUser: User): Promise<User> {
    const data = User.toDataBase(saveUser);
    if (saveUser.id) {
      const row = await this.userRepository.save(data);
      return User.fromDataBase(row);
    } else {
      const createUser = await this.userRepository.create(data);
      const row = await this.userRepository.save(createUser);
      return User.fromDataBase(row);
    }
  }
}
