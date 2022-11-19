import { Args, Resolver, Query } from '@nestjs/graphql';
import { UsersRepository } from '../../repositories/user-repository';

@Resolver('Users')
export class UsersResolver {
  constructor(private readonly usersRepository: UsersRepository) {}
  @Query()
  users() {
    return this.usersRepository.findAll();
  }

  @Query()
  user(@Args('id') id: string) {
    return this.usersRepository.findById(id);
  }
}
