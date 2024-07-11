import { Module } from '@nestjs/common';
import { ComicsCategoriesService } from './comics-categories.service';
import { ComicsCategoriesController } from './comics-categories.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ComicCategory } from './models/comic-category.models';

@Module({
  imports: [SequelizeModule.forFeature([ComicCategory])],
  controllers: [ComicsCategoriesController],
  providers: [ComicsCategoriesService],
  exports: [ComicsCategoriesService],
})
export class ComicsCategoriesModule {}
