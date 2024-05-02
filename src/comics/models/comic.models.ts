import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Collection } from 'src/collections/models/collection.models';
import { Publisher } from 'src/publishers/models/publisher.models';

@Table
export class Comic extends Model<Comic> {
  @Column({ allowNull: false })
  title: string;

  @Column({ allowNull: false })
  picture: string;

  @Column({ allowNull: false })
  description: string;

  @Column({ allowNull: false })
  releaseDate: Date;

  @Column({ allowNull: true })
  tome: number;

  @ForeignKey(() => Collection)
  @Column({ allowNull: false })
  collectionId: number;

  @ForeignKey(() => Publisher)
  @Column({ allowNull: false })
  publisherId: number;

  @BelongsTo(() => Collection)
  Collection: Collection;

  @BelongsTo(() => Publisher)
  Publisher: Publisher;
}
