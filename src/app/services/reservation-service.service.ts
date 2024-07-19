import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetReservation } from '../models/reservation/get-reservation';
import { UpdateReservation } from '../models/reservation/update-reservation';
import { PaginationRequest } from '../models/pagination/pagination-request';
import { PaginationResponse } from '../models/pagination/pagination-response';
import { AddReservation } from '../models/reservation/add-reservation';
import { ReservationStatus } from '../models/enums/reservation-status';

@Injectable({
  providedIn: 'root',
})
export class ReservationServiceService {
  private apiControllerUrl = `${environment.apiUrl}/reservations`;
  constructor(private http: HttpClient) {}

  getReservationById(reservationId: number): Observable<GetReservation> {
    return this.http.get<GetReservation>(
      `${this.apiControllerUrl}/${reservationId}`
    );
  }

  updateReservationById(
    reservationId: number,
    request: UpdateReservation
  ): Observable<GetReservation> {
    return this.http.put<GetReservation>(
      `${this.apiControllerUrl}/${reservationId}`,
      request
    );
  }

  deleteReservationById(reservationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiControllerUrl}/${reservationId}`);
  }

  getAllReservationsWithPagination(
    request: PaginationRequest
  ): Observable<PaginationResponse<GetReservation>> {
    return this.http.get<PaginationResponse<GetReservation>>(
      `${this.apiControllerUrl}?pageNumber:${request.pageNumber}&pageSize:${request.pageSize}&direction:${request.direction}&sortBy:${request.sortBy}`
    );
  }

  addReservation(request: AddReservation): Observable<GetReservation> {
    return this.http.post<GetReservation>(this.apiControllerUrl, request);
  }

  changeReservationStatusById(
    reservationId: number,
    request: ReservationStatus
  ): Observable<PaginationResponse<GetReservation>> {
    return this.http.patch<PaginationResponse<GetReservation>>(
      `${this.apiControllerUrl}/${reservationId}`,
      request
    );
  }

  confirmReservationById(reservationId: number): Observable<GetReservation> {
    return this.http.patch<GetReservation>(
      `${this.apiControllerUrl}/confirmReservationById/${reservationId}`,
      null
    );
  }

  cancelReservationById(reservationId: number): Observable<GetReservation> {
    return this.http.patch<GetReservation>(
      `${this.apiControllerUrl}/cancelReservationById/${reservationId}`,
      null
    );
  }

  getTotelRevenueByUserId(userId: number): Observable<number> {
    return this.http.get<number>(
      `${this.apiControllerUrl}/totalRevenue/${userId}`
    );
  }

  getReservationsByUserId(
    userId: number,
    request: PaginationRequest
  ): Observable<PaginationResponse<GetReservation>> {
    return this.http.get<PaginationResponse<GetReservation>>(
      `${this.apiControllerUrl}/reservationsByUserId/${userId}?pageNumber:${request.pageNumber}&pageSize:${request.pageSize}&direction:${request.direction}&sortBy:${request.sortBy}`
    );
  }

  getReservationsByHotelId(
    hotelId: number,
    request: PaginationRequest
  ): Observable<PaginationResponse<GetReservation>> {
    return this.http.get<PaginationResponse<GetReservation>>(
      `${this.apiControllerUrl}/reservationsByHotelId/${hotelId}?pageNumber:${request.pageNumber}&pageSize:${request.pageSize}&direction:${request.direction}&sortBy:${request.sortBy}`
    );
  }

  getPastReservationsByUserId(
    userId: number,
    request: PaginationRequest
  ): Observable<PaginationResponse<GetReservation>> {
    return this.http.get<PaginationResponse<GetReservation>>(
      `${this.apiControllerUrl}/pastReservations/${userId}?pageNumber:${request.pageNumber}&pageSize:${request.pageSize}&direction:${request.direction}&sortBy:${request.sortBy}`
    );
  }
}
