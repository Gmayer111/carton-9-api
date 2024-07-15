import { Module } from '@nestjs/common';
import { ComicsService } from './comics.service';
import { ComicsController } from './comics.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comic } from './models/comic.models';
import { CollectionsModule } from 'src/collections/collections.module';

@Module({
  imports: [SequelizeModule.forFeature([Comic]), CollectionsModule],
  controllers: [ComicsController],
  providers: [ComicsService],
  exports: [ComicsService],
})
export class ComicsModule {}
