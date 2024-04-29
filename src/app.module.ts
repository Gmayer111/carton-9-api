import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './users/users.module';
import { User } from './users/models/user.model';
import { Role } from './roles/models/role.model';
import { RoleModule } from './roles/roles.module';
import { ComicsModule } from './comics/comics.module';
import { CollectionsModule } from './collections/collections.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthorsModule } from './authors/authors.module';
import { PublishersModule } from './publishers/publishers.module';
import { CollectionsModule } from './collections/collections.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [User, Role],
    }),
    UserModule,
    RoleModule,
    ComicsModule,
    CollectionsModule,
    CategoriesModule,
    AuthorsModule,
    PublishersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
