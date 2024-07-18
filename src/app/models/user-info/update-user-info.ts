import { Genders } from '../enums/genders';

export interface UpdateUserInfo {
  phoneNumber: string;
  age: number;
  gender: Genders;
  userId: number;
  addressId: number;
}
