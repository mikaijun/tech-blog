import { Injectable } from '@nestjs/common';
import { Cat } from 'src/graphql.schema';
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    { id: 1, name: 'Cat1', age: 5 },
    { id: 2, name: 'Cat2', age: 10 },
  ];
  findAll() {
    return this.cats;
  }
  findOneById(id: number) {
    return this.cats.find((cat) => cat.id === id);
  }
}
