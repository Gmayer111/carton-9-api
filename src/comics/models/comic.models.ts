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
import { ComicAuthor } from 'src/comics-authors/models/comic-author.model';
import { ComicCategory } from 'src/comics-categories/models/comic-category.models';
import { Publisher } from 'src/publishers/models/publisher.models';

@Table
export class Comic extends Model<Comic> {
  @Column({ allowNull: false })
  title: string;

  @Column({ allowNull: false })
  picture: string;

  @Column({ allowNull: false })
  description: string;

  @Column({ allowNull: false })
  releaseDate: Date;

  @Column({ allowNull: false })
  tome: number;

  @BelongsToMany(() => Author, () => ComicAuthor)
  Author: Author[];

  @BelongsToMany(() => Category, () => ComicCategory)
  Category: Category[];

  @ForeignKey(() => Collection)
  @Column({ allowNull: false })
  collectionId: number;

  @ForeignKey(() => Publisher)
  @Column({ allowNull: false })
  publisherId: number;

  @BelongsTo(() => Collection)
  Collection: Collection;

  @BelongsTo(() => Publisher)
  Publisher: Publisher;
}
