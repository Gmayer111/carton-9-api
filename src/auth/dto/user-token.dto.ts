import { RoleEnum } from 'src/authorization/enums/role.enum';

export class UserTokenDto {
  readonly role: RoleEnum;
  readonly access_token: string;
}
