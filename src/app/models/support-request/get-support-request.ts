import { SupporRequestType } from '../enums/support-request-type';

export interface GetSupportRequest {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  type: SupporRequestType;
  userId: number;
}
