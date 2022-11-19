import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { UsersRepository } from '../../repositories/user-repository';

@Resolver('Users')
export class UsersResolver {
  constructor(private readonly usersRepository: UsersRepository) {}
  @Query()
  users() {
    return this.usersRepository.findAll();
  }

  @Query()
  user(@Args('id') id: number) {
    return this.usersRepository.findById(id);
  }

  @Mutation()
  saveUser(@Args('input') input: any) {
    return this.usersRepository.save(input);
  }
}
