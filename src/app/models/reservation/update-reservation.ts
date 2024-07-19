import { ReservationStatus } from '../enums/reservation-status';

export interface UpdateReservation {
  checkIn: string;
  checkOut: string;
  status: ReservationStatus;
  userId: number;
  roomId: number;
}
