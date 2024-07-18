import { UserRoles } from "../user/user-roles";

export interface LoginResponse {
  token: string;
  userId: number;
  role: UserRoles;
}
