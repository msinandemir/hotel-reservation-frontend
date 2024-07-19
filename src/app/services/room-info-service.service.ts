import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetRoomInfo } from '../models/room-info/get-room-info';
import { UpdateRoomInfo } from '../models/room-info/update-room-info';
import { AddRoomInfo } from '../models/room-info/add-room-info';

@Injectable({
  providedIn: 'root',
})
export class RoomInfoServiceService {
  private apiControllerUrl = `${environment.apiUrl}/roomInfos`;

  constructor(private http: HttpClient) {}

  getRoomInfoById(roomInfoId: number): Observable<GetRoomInfo> {
    return this.http.get<GetRoomInfo>(`${this.apiControllerUrl}/${roomInfoId}`);
  }

  updateRoomInfoById(
    roomInfoId: number,
    request: UpdateRoomInfo
  ): Observable<GetRoomInfo> {
    return this.http.put<GetRoomInfo>(
      `${this.apiControllerUrl}/${roomInfoId}`,
      request
    );
  }

  deleteRoomInfoById(roomInfoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiControllerUrl}/${roomInfoId}`);
  }

  addRoomInfo(request: AddRoomInfo): Observable<GetRoomInfo> {
    return this.http.post<GetRoomInfo>(this.apiControllerUrl, request);
  }

  getRoomInfoByHotelId(hotelId: number): Observable<GetRoomInfo> {
    return this.http.get<GetRoomInfo>(
      `${this.apiControllerUrl}/getRoomInfoByRoomId/${hotelId}`
    );
  }
}
