import { Body, Controller, Get, Post } from '@nestjs/common';
import { stringify } from 'querystring';
import { Items } from 'src/model/items.model';
import { ItemsService } from 'src/services/items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  index(): Items[] {
    return this.itemService.getItems();
  }

  @Post('addItem')
  addItem(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Items[] {
    const item: Items = {
      id: '1',
      name: title,
      description,
      price: 20,
    };
    return this.itemService.addItem(item);
  }
}
