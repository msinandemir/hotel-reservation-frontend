import { Genders } from "../enums/genders";

export interface GetUserInfo {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  phoneNumber: string;
  age: number;
  gender: Genders;
  userId: number;
}

