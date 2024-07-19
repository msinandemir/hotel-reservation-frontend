import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentResponse } from '../models/payment/payment-response';
import { PaymentModel } from '../models/payment/payment-model';

@Injectable({
  providedIn: 'root',
})
export class PaymentServiceService {
  private apiControllerUrl = `${environment.apiUrl}/payments`;

  constructor(private http: HttpClient) {}

  pay(request: PaymentModel): Observable<PaymentResponse> {
    return this.http.post<PaymentResponse>(this.apiControllerUrl, request);
  }
}
