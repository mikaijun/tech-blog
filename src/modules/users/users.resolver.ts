import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { UserSaveInput } from 'src/entities/user.entity';
import { User } from 'src/models/user.model';
import { UsersRepository } from '../../repositories/user-repository';
import { UserDeleteUseCase } from './usecases/users-delete.usecase';
import { UserSaveUseCase } from './usecases/users-save-usecase';

@Resolver('Users')
export class UsersResolver {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly userSaveUseCase: UserSaveUseCase,
    private readonly userDeleteUseCase: UserDeleteUseCase,
  ) {}
  @Query()
  users(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  @Query()
  user(@Args('id') id: number): Promise<User> {
    return this.usersRepository.findById(id);
  }

  @Mutation()
  saveUser(@Args('input') input: UserSaveInput): Promise<User> {
    return this.userSaveUseCase.invoke(input);
  }

  @Mutation()
  deleteUser(@Args('id') id: number): Promise<User> {
    return this.userDeleteUseCase.invoke(id);
  }
}
