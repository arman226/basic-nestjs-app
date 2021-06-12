import { Injectable } from '@nestjs/common';
import { Items } from 'src/model/items.model';

@Injectable()
export class ItemsService {
  items: Items[] = [];

  getItems(): Items[] {
    return this.items;
  }

  addItem(item: Items): Items[] {
    this.items.push(item);
    return this.getItems();
  }
}
