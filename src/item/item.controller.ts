import { Get, Post, Body, Controller } from '@nestjs/common';
import { Item } from './item.entity';
import { ItemService } from './item.service';

@Controller()
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get('/item')
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Post('/item')
  add(
    @Body('name') name: string,
    @Body('description') description: string,
  ): Promise<Item> {
    console.log(name);
    console.log(description);
    return this.itemService.add({
      id: undefined,
      name: name,
      description: description,
    });
  }
}
