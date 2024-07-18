import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetUser } from '../models/user/get-user';
import { UpdateUser } from '../models/user/update-user';
import { UserRoles } from '../models/user/user-roles';
import { PaginationRequest } from '../models/pagination/pagination-request';
import { PaginationResponse } from '../models/pagination/pagination-response';
import { AddUser } from '../models/user/add-user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private apiControllerUrl = `${environment.apiUrl}/users`;
  constructor(private http: HttpClient) {}

  getUserById(userId: number): Observable<GetUser> {
    return this.http.get<GetUser>(`${this.apiControllerUrl}/${userId}`);
  }

  updateUserById(userId: number, request: UpdateUser): Observable<GetUser> {
    return this.http.put<GetUser>(
      `${this.apiControllerUrl}/${userId}`,
      request
    );
  }

  deleteUserById(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiControllerUrl}/${userId}`);
  }

  changeUserRoleByUserId(userId: number, role: UserRoles): Observable<GetUser> {
    return this.http.patch<GetUser>(`${this.apiControllerUrl}/${userId}`, role);
  }

  getAllUsersWithPagination(
    request: PaginationRequest
  ): Observable<PaginationResponse<GetUser>> {
    return this.http.get<PaginationResponse<GetUser>>(
      `${this.apiControllerUrl}?pageNumber:${request.pageNumber}&pageSize:${request.pageSize}&direction:${request.direction}&sortBy:${request.sortBy}`
    );
  }

  addUser(request: AddUser): Observable<GetUser> {
    return this.http.post<GetUser>(this.apiControllerUrl, request);
  }
}
