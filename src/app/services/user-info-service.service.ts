import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetUserInfo } from '../models/user-info/get-user-info';
import { UpdateUserInfo } from '../models/user-info/update-user-info';
import { AddUserInfo } from '../models/user-info/add-user-info';

@Injectable({
  providedIn: 'root',
})
export class UserInfoServiceService {
  private apiControllerUrl = `${environment.apiUrl}/userInfos`;

  constructor(private http: HttpClient) {}

  getUserInfoById(userInfoId: number): Observable<GetUserInfo> {
    return this.http.get<GetUserInfo>(`${this.apiControllerUrl}/${userInfoId}`);
  }

  updateUserInfoById(
    userInfoId: number,
    request: UpdateUserInfo
  ): Observable<GetUserInfo> {
    return this.http.put<GetUserInfo>(
      `${this.apiControllerUrl}/${userInfoId}`,
      request
    );
  }

  deleteUserInfoById(userInfoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiControllerUrl}/${userInfoId}`);
  }

  addUserInfo(request: AddUserInfo): Observable<GetUserInfo> {
    return this.http.post<GetUserInfo>(this.apiControllerUrl, request);
  }

  getUserInfoByUserId(userId: number): Observable<GetUserInfo> {
    return this.http.get<GetUserInfo>(`${this.apiControllerUrl}/userInfoByUserId/${userId}`);
  }
}
