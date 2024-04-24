import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Role extends Model {
  @Column({ allowNull: false })
  label: string;
}
