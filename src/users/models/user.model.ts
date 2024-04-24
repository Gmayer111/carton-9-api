import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Role } from 'src/roles/models/role.model';

@Table
export class User extends Model<User> {
  @Column({ allowNull: false })
  firstName: string;

  @Column({ allowNull: false })
  lastName: string;

  @Column({ allowNull: false, unique: true })
  email: string;

  @Column({ allowNull: true })
  description: string;

  @Column({ allowNull: true })
  birthdate: Date;

  @Column({ allowNull: true })
  nationality: string;

  @Column({ allowNull: false })
  password: string;

  @Column({ allowNull: true })
  picture: string;

  @ForeignKey(() => Role)
  @Column({ allowNull: false })
  roleId: number;

  @BelongsTo(() => Role)
  Role: Role;
}
