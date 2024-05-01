import { Module } from '@nestjs/common';
import { PublishersService } from './publishers.service';
import { PublishersController } from './publishers.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Publisher } from './models/publisher.models';

@Module({
  imports: [SequelizeModule.forFeature([Publisher])],
  controllers: [PublishersController],
  providers: [PublishersService],
})
export class PublishersModule {}
