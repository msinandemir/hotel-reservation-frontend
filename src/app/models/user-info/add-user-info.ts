import { Genders } from '../enums/genders';

export interface AddUserInfo {
  phoneNumber: string;
  age: number;
  gender: Genders;
  userId: number;
  addressId: number;
}
