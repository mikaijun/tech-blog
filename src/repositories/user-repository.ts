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

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    return User.fromDataBase(user);
  }

  async save(saveUser: User): Promise<UserEntity> {
    if (saveUser.id) {
      return await this.userRepository.save(User.toDataBase(saveUser));
    } else {
      const newItem = this.userRepository.create(User.toDataBase(saveUser));
      return await this.userRepository.save(newItem);
    }
  }
}
