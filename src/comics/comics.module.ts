import { Module } from '@nestjs/common';
import { ComicsService } from './comics.service';
import { ComicsController } from './comics.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comic } from './models/comic.models';
import { CollectionsModule } from 'src/collections/collections.module';
import { Collection } from 'src/collections/models/collection.models';
import { Publisher } from 'src/publishers/models/publisher.models';
import { ComicsAuthorsModule } from 'src/comics/comics-authors/comics-authors.module';
import { ComicsCategoriesModule } from './comics-categories/comics-categories.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Comic, Collection, Publisher]),
    CollectionsModule,
    ComicsAuthorsModule,
    ComicsCategoriesModule,
  ],
  controllers: [ComicsController],
  providers: [ComicsService],
  exports: [ComicsService],
})
export class ComicsModule {}
