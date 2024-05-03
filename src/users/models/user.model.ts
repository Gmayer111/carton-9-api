import {
  BeforeBulkCreate,
  BeforeBulkUpdate,
  BeforeCreate,
  BeforeUpdate,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';
import { RoleEnum } from 'src/auth/enums/role.enum';

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

  @Column({
    type: DataType.ENUM,
    values: ['user', 'admin'],
    allowNull: false,
    defaultValue: 'admin',
  })
  role: RoleEnum;

  @Column({ allowNull: true })
  picture: string;

  @BeforeCreate
  @BeforeUpdate
  @BeforeBulkCreate
  @BeforeBulkUpdate
  public static async hashPasswordHook(user: User) {
    if (!user.changed('password')) return;
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
  }

  public checkPassword(password: string) {
    return bcrypt.compare(password, this.password);
  }

  public passwordExist(password: string) {
    if (password) return true;
    else return false;
  }
}
