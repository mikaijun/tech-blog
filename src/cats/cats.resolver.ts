import { Resolver, Args, Query } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { ParseIntPipe } from '@nestjs/common';
@Resolver('Cats')
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}
  @Query()
  getCats() {
    return this.catsService.findAll();
  }
  @Query('cat')
  findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ) {
    return this.catsService.findOneById(id);
  }
}
