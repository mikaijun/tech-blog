import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { UsersRepository } from 'src/repositories/user-repository';
import { UserSaveUseCase } from './usecases/users-save-usecase';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersResolver, UsersRepository, UserSaveUseCase],
})
export class UsersModule {}
