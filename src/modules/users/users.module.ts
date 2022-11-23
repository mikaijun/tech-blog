import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { UsersRepository } from 'src/repositories/user-repository';
import { UserDeleteUseCase } from './usecases/users-delete.usecase';
import { UserSaveUseCase } from './usecases/users-save-usecase';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    UsersResolver,
    UsersRepository,
    UserSaveUseCase,
    UserDeleteUseCase,
  ],
})
export class UsersModule {}
