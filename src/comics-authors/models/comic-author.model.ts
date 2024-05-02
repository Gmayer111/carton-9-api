import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Author } from 'src/authors/models/author.models';
import { Comic } from 'src/comics/models/comic.models';

@Table
export class ComicAuthor extends Model<ComicAuthor> {
  @ForeignKey(() => Comic)
  @Column
  comicId: Comic;

  @ForeignKey(() => Author)
  @Column
  authorId: Author;

  @BelongsTo(() => Comic)
  Comic: Comic;

  @BelongsTo(() => Author)
  Author: Author;
}
