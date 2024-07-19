import { SupporRequestType } from '../enums/support-request-type';

export interface UpdateSupportRequest {
  title: string;
  description: string;
  type: SupporRequestType;
  userId: number;
}
