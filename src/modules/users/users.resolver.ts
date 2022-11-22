import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { UserSaveInput } from 'src/entities/user.entity';
import { UsersRepository } from '../../repositories/user-repository';
import { UserSaveUseCase } from './usecases/users-save-usecase';

@Resolver('Users')
export class UsersResolver {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly userSaveUseCase: UserSaveUseCase,
  ) {}
  @Query()
  users() {
    return this.usersRepository.findAll();
  }

  @Query()
  user(@Args('id') id: number) {
    return this.usersRepository.findById(id);
  }

  @Mutation()
  saveUser(@Args('input') input: UserSaveInput) {
    return this.userSaveUseCase.invoke(input);
  }
}
