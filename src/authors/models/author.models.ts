import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Author extends Model<Author> {
  @Column({ allowNull: false })
  firstName: string;

  @Column({ allowNull: false })
  lastName: string;

  @Column({ allowNull: true })
  link: string;

  @Column({ allowNull: true })
  picture: string;

  @Column({ allowNull: true })
  description: string;
}
