import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetCity } from '../models/city/get-city';
import { UpdateCity } from '../models/city/update-city';
import { AddCity } from '../models/city/add-city';

@Injectable({
  providedIn: 'root',
})
export class CityServiceService {
  private apiControllerUrl = `${environment.apiUrl}/cities`;

  constructor(private http: HttpClient) {}

  getCityById(cityId: number): Observable<GetCity> {
    return this.http.get<GetCity>(`${this.apiControllerUrl}/${cityId}`);
  }

  updateCityById(cityId: number, request: UpdateCity): Observable<GetCity> {
    return this.http.put<GetCity>(
      `${this.apiControllerUrl}/${cityId}`,
      request
    );
  }

  deleteCityById(cityId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiControllerUrl}/${cityId}`);
  }

  getAllCities(): Observable<GetCity[]> {
    return this.http.get<GetCity[]>(this.apiControllerUrl);
  }

  addCity(request: AddCity): Observable<GetCity>{
    return this.http.post<GetCity>(this.apiControllerUrl, request)
  }
}
