import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Collection } from 'src/collections/models/collection.models';

@Table
export class Publisher extends Model<Publisher> {
  @Column({ allowNull: true })
  picture: string;

  @Column({ allowNull: false })
  address: string;

  @Column({ allowNull: false })
  zipcode: string;

  @Column({ allowNull: false })
  city: string;

  @Column({ allowNull: false })
  country: string;
}
