import { ReservationStatus } from "../enums/reservation-status";

export interface GetReservation {
  id: number;
  createdAt: string;
  updatedAt: string;
  checkIn: Date;
  checkOut: Date;
  totalPrice: number;
  status: ReservationStatus
  userId: number;
  roomId: number;
}
