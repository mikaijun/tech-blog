import { Module } from '@nestjs/common';
import { UsersRepository } from 'src/repositories/user-repository';
import { UsersResolver } from './users/users.resolver';

@Module({
  providers: [UsersResolver, UsersRepository],
})
export class UsersModule {}
