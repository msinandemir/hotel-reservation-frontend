import { SupporRequestType } from '../enums/support-request-type';

export interface AddSupportRequest {
  title: string;
  description: string;
  type: SupporRequestType;
  userId: number;
}
