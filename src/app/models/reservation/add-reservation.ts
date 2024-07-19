import { ReservationStatus } from '../enums/reservation-status';

export interface AddReservation {
  checkIn: string;
  checkOut: string;
  status: ReservationStatus;
  userId: number;
  roomId: number;
}
