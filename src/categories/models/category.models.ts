import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Category extends Model<Category> {
  @Column({ allowNull: false })
  label: string;
}
