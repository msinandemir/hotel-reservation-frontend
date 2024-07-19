import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { GetCountry } from '../models/country/get-country';
import { UpdateCountry } from '../models/country/update-country';
import { AddCountry } from '../models/country/add-country';

@Injectable({
  providedIn: 'root',
})
export class CountryServiceService {
  private apiControllerUrl = `${environment.apiUrl}/countries`;
  constructor(private http: HttpClient) {}

  getCountryById(countryId: number): Observable<GetCountry> {
    return this.http.get<GetCountry>(`${this.apiControllerUrl}/${countryId}`);
  }

  updateCountryById(
    countryId: number,
    request: UpdateCountry
  ): Observable<GetCountry> {
    return this.http.put<GetCountry>(
      `${this.apiControllerUrl}/${countryId}`,
      request
    );
  }

  deleteCountryById(countryId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiControllerUrl}/${countryId}`);
  }

  getAllCountries(): Observable<GetCountry[]> {
    return this.http.get<GetCountry[]>(this.apiControllerUrl);
  }

  addCountry(request: AddCountry): Observable<GetCountry> {
    return this.http.post<GetCountry>(this.apiControllerUrl, request);
  }
}
