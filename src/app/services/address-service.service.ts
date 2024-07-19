import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetAddress } from '../models/address/get-address';
import { UpdateAddress } from '../models/address/update-address';
import { AddAddress } from '../models/address/add-address';

@Injectable({
  providedIn: 'root',
})
export class AddressServiceService {
  private apiControllerUrl = `${environment.apiUrl}/addresses`;

  constructor(private http: HttpClient) {}

  getAddressById(addressId: number): Observable<GetAddress> {
    return this.http.get<GetAddress>(`${this.apiControllerUrl}/${addressId}`);
  }

  updateAddressById(
    addressId: number,
    request: UpdateAddress
  ): Observable<GetAddress> {
    return this.http.put<GetAddress>(
      `${this.apiControllerUrl}/${addressId}`,
      request
    );
  }

  deleteAddressById(addressId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiControllerUrl}/${addressId}`);
  }

  addAddress(request: AddAddress): Observable<GetAddress> {
    return this.http.post<GetAddress>(this.apiControllerUrl, request);
  }

  getAddressByUserId(userId: number): Observable<GetAddress> {
    return this.http.get<GetAddress>(
      `${this.apiControllerUrl}/getAddressesByUserId/${userId}`
    );
  }
}
