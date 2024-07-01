import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Publisher extends Model<Publisher> {
  @Column({ allowNull: true })
  picture: string;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  address: string;

  @Column({ allowNull: false })
  zipcode: string;

  @Column({ allowNull: false })
  city: string;

  @Column({ allowNull: false })
  country: string;
}
