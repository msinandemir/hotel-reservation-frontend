import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetHotel } from '../models/hotel/get-hotel';
import { UpdateHotel } from '../models/hotel/update-hotel';
import { PaginationRequest } from '../models/pagination/pagination-request';
import { PaginationResponse } from '../models/pagination/pagination-response';
import { AddHotel } from '../models/hotel/add-hotel';

@Injectable({
  providedIn: 'root',
})
export class HotelServiceService {
  private apiControllerUrl = `${environment.apiUrl}/hotels`;
  constructor(private http: HttpClient) {}

  getHotelById(hotelId: number): Observable<GetHotel> {
    return this.http.get<GetHotel>(`${this.apiControllerUrl}/${hotelId}`);
  }

  updateHotelById(hotelId: number, request: UpdateHotel): Observable<GetHotel> {
    return this.http.put<GetHotel>(
      `${this.apiControllerUrl}/${hotelId}`,
      request
    );
  }

  deleteHotelById(hotelId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiControllerUrl}/${hotelId}`);
  }

  getAllHotelsWithPagination(
    request: PaginationRequest
  ): Observable<PaginationResponse<GetHotel>> {
    return this.http.get<PaginationResponse<GetHotel>>(
      `${this.apiControllerUrl}?pageNumber:${request.pageNumber}&pageSize:${request.pageSize}&direction:${request.direction}&sortBy:${request.sortBy}`
    );
  }

  addHotel(request: AddHotel): Observable<GetHotel> {
    return this.http.post<GetHotel>(this.apiControllerUrl, request);
  }

  filterHotelByStarAndCityName(
    star: number,
    cityName: string,
    request: PaginationRequest
  ): Observable<PaginationResponse<GetHotel>> {
    return this.http.get<PaginationResponse<GetHotel>>(
      `${this.apiControllerUrl}/filterHotelByStarAndCityName?star:${star}&cityName:${cityName}&pageNumber:${request.pageNumber}&pageSize:${request.pageSize}&direction:${request.direction}&sortBy:${request.sortBy}`
    );
  }
}
