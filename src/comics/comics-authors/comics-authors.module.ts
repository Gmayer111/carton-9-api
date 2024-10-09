import { Module } from '@nestjs/common';
import { ComicsAuthorsService } from './comics-authors.service';
import { ComicsAuthorsController } from './comics-authors.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ComicAuthor } from './models/comic-author.model';

@Module({
  imports: [SequelizeModule.forFeature([ComicAuthor])],
  controllers: [ComicsAuthorsController],
  providers: [ComicsAuthorsService],
  exports: [ComicsAuthorsService],
})
export class ComicsAuthorsModule {}
