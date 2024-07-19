import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetRoom } from '../models/room/get-room';
import { UpdateRoom } from '../models/room/update-room';
import { PaginationRequest } from '../models/pagination/pagination-request';
import { PaginationResponse } from '../models/pagination/pagination-response';
import { AddRoom } from '../models/room/add-room';
import { RoomType } from '../models/enums/room-type';

@Injectable({
  providedIn: 'root',
})
export class RoomServiceService {
  private apiControllerUrl = `${environment.apiUrl}/rooms`;
  constructor(private http: HttpClient) {}

  getRoomById(roomId: number): Observable<GetRoom> {
    return this.http.get<GetRoom>(`${this.apiControllerUrl}/${roomId}`);
  }

  updateRoomById(roomId: number, request: UpdateRoom): Observable<GetRoom> {
    return this.http.put<GetRoom>(
      `${this.apiControllerUrl}/${roomId}`,
      request
    );
  }

  deleteRoomById(roomId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiControllerUrl}/${roomId}`);
  }

  getAllRoomsWithPagination(
    request: PaginationRequest
  ): Observable<PaginationResponse<GetRoom>> {
    return this.http.get<PaginationResponse<GetRoom>>(
      `${this.apiControllerUrl}?pageNumber:${request.pageNumber}&pageSize:${request.pageSize}&direction:${request.direction}&sortBy:${request.sortBy}`
    );
  }

  addRoom(request: AddRoom): Observable<GetRoom> {
    return this.http.post<GetRoom>(this.apiControllerUrl, request);
  }

  findAvailableRoomByTypeAndDate(
    type: RoomType,
    checkIn: Date,
    checkOut: Date
  ): Observable<GetRoom> {
    return this.http.get<GetRoom>(
      `${this.apiControllerUrl}/findAvailableRoomByTypeAndDate?${type}&${checkIn}&${checkOut}`
    );
  }

  filterRoomByHotelId(
    hotelId: number,
    capacity: number | null,
    price: number | null,
    singleBed: number | null,
    doubleBed: number | null,
    bunkBed: number | null,
    type: RoomType | null
  ): Observable<GetRoom> {
    return this.http.get<GetRoom>(
      `${this.apiControllerUrl}/findAvailableRoomByTypeAndDate/${hotelId}?${capacity}&${price}&${singleBed}&${doubleBed}&${bunkBed}&${type}`
    );
  }
}
