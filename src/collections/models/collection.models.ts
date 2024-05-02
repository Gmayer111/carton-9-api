import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Collection extends Model<Collection> {
  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: true })
  total: number;
}
