import { Module } from '@nestjs/common';
import { ComicsService } from './comics.service';
import { ComicsController } from './comics.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comic } from './models/comic.models';

@Module({
  imports: [SequelizeModule.forFeature([Comic])],
  controllers: [ComicsController],
  providers: [ComicsService],
})
export class ComicsModule {}
