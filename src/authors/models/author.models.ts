import { Column, Model, Table } from 'sequelize-typescript';

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
}
