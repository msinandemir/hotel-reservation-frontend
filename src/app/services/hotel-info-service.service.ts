import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetHotelInfo } from '../models/hotel-info/get-hotel-info';
import { AddHotelInfo } from '../models/hotel-info/add-hotel-info';
import { UpdateHotelInfo } from '../models/hotel-info/update-hotel-info';

@Injectable({
  providedIn: 'root',
})
export class HotelInfoServiceService {
  private apiControllerUrl = `${environment.apiUrl}/hotelInfos`;

  constructor(private http: HttpClient) {}

  getHotelInfoById(hotelInfoId: number): Observable<GetHotelInfo> {
    return this.http.get<GetHotelInfo>(
      `${this.apiControllerUrl}/${hotelInfoId}`
    );
  }

  updateHotelInfoById(
    hotelInfoId: number,
    request: UpdateHotelInfo
  ): Observable<GetHotelInfo> {
    return this.http.put<GetHotelInfo>(
      `${this.apiControllerUrl}/${hotelInfoId}`,
      request
    );
  }

  deleteHotelInfoById(hotelInfoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiControllerUrl}/${hotelInfoId}`);
  }

  addHotelInfo(request: AddHotelInfo): Observable<GetHotelInfo> {
    return this.http.post<GetHotelInfo>(this.apiControllerUrl, request);
  }

  getHotelInfoByHotelId(hotelId: number): Observable<GetHotelInfo> {
    return this.http.get<GetHotelInfo>(
      `${this.apiControllerUrl}/getHotelInfoByHotelId/${hotelId}`
    );
  }
}
