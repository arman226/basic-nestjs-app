import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { ItemsController } from './controllers/items.controller';
import { AppService } from './services/app.service';
import { ItemsService } from './services/items.service';

@Module({
  imports: [],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
