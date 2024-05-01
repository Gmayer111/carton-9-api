import { Module } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { CollectionsController } from './collections.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Collection } from './models/collection.models';

@Module({
  imports: [SequelizeModule.forFeature([Collection])],
  controllers: [CollectionsController],
  providers: [CollectionsService],
})
export class CollectionsModule {}
