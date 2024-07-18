import { UserRoles } from "./user-roles";

export interface GetUser {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRoles;
  addressId: number;
}
