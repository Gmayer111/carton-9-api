import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { ComicAuthor } from 'src/comics/comics-authors/models/comic-author.model';
import { Comic } from 'src/comics/models/comic.models';

@Table
export class Author extends Model<Author> {
  @Column({ allowNull: false })
  userName: string;

  @Column({ allowNull: true })
  firstName: string;

  @Column({ allowNull: true })
  lastName: string;

  @Column({ allowNull: true })
  link: string;

  @Column({ allowNull: true })
  picture: string;

  @Column({ allowNull: true })
  description: string;

  @BelongsToMany(() => Comic, () => ComicAuthor)
  Comic: Comic[];
}
