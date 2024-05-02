import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Category } from 'src/categories/models/category.models';
import { Comic } from 'src/comics/models/comic.models';

@Table
export class ComicCategory extends Model<ComicCategory> {
  @ForeignKey(() => Comic)
  @Column
  comicId: Comic;

  @ForeignKey(() => Category)
  @Column
  categoryId: Category;

  @BelongsTo(() => Comic)
  Comic: Comic;

  @BelongsTo(() => Category)
  Category: Category;
}
