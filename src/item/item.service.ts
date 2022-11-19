import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Item } from './item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private readonly itemRepos: Repository<Item>,
  ) {}

  async add(item: Item): Promise<Item> {
    const newItem = this.itemRepos.create(item);
    return await this.itemRepos.save(newItem);
  }

  async findAll(): Promise<Item[]> {
    return await this.itemRepos.find();
  }
}
