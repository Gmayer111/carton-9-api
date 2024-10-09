import {
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Author } from 'src/authors/models/author.models';
import { Category } from 'src/categories/models/category.models';
import { Collection } from 'src/collections/models/collection.models';
import { ComicAuthor } from 'src/comics/comics-authors/models/comic-author.model';
import { ComicCategory } from 'src/comics-categories/models/comic-category.models';
import { Publisher } from 'src/publishers/models/publisher.models';

@Table
export class Comic extends Model {
  @Column({ allowNull: false })
  title: string;

  @Column({ allowNull: false })
  releaseDate: Date;

  @Column({ allowNull: true })
  description: string;

  @Column({ allowNull: true })
  tome: number;

  @Column({ allowNull: true })
  picture: string;

  @BelongsToMany(() => Author, () => ComicAuthor)
  Authors: Author[];

  @BelongsToMany(() => Category, () => ComicCategory)
  Category: Category[];

  @ForeignKey(() => Collection)
  @Column({ allowNull: false })
  collectionId: number;

  @BelongsTo(() => Collection)
  Collection: Collection;

  @ForeignKey(() => Publisher)
  @Column({ allowNull: false })
  publisherId: number;

  @BelongsTo(() => Publisher)
  Publisher: Publisher;
}
