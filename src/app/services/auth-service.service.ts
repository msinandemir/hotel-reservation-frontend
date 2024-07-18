import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Register } from '../models/auth/register';
import { Observable } from 'rxjs';
import { GetUser } from '../models/user/get-user';
import { LoginRequest } from '../models/auth/login-request';
import { LoginResponse } from '../models/auth/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private apiControllerUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  register(request: Register): Observable<GetUser> {
    return this.http.post<GetUser>(
      this.apiControllerUrl + '/register',
      request
    );
  }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      this.apiControllerUrl + '/login',
      request
    );
  }
}
