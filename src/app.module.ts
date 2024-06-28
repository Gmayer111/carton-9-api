import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './users/users.module';
import { User } from './users/models/user.model';
import { ComicsModule } from './comics/comics.module';
import { CollectionsModule } from './collections/collections.module';
import { AuthModule } from './auth/auth.module';
import { ComicsCategoriesModule } from './comics-categories/comics-categories.module';
import { ComicsAuthorsModule } from './comics-authors/comics-authors.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthorsModule } from './authors/authors.module';
import { PublishersModule } from './publishers/publishers.module';
import { Category } from './categories/models/category.models';
import { Comic } from './comics/models/comic.models';
import { Collection } from './collections/models/collection.models';
import { Author } from './authors/models/author.models';
import { ComicAuthor } from './comics-authors/models/comic-author.model';
import { Publisher } from './publishers/models/publisher.models';
import { ComicCategory } from './comics-categories/models/comic-category.models';

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
      models: [
        User,
        Comic,
        Collection,
        Author,
        Category,
        Publisher,
        ComicAuthor,
        ComicCategory,
      ],
    }),
    UserModule,
    ComicsModule,
    CollectionsModule,
    CategoriesModule,
    AuthorsModule,
    PublishersModule,
    ComicsAuthorsModule,
    ComicsCategoriesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
