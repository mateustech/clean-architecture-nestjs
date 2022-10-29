import { ID } from '../types';

export class UserCreateDto {
  id?: ID;
  name: string;
  email: string;
  password: string;
}
