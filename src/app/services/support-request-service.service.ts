import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetSupportRequest } from '../models/support-request/get-support-request';
import { PaginationRequest } from '../models/pagination/pagination-request';
import { PaginationResponse } from '../models/pagination/pagination-response';
import { AddSupportRequest } from '../models/support-request/add-support-request';
import { UpdateSupportRequest } from '../models/support-request/update-support-request';

@Injectable({
  providedIn: 'root'
})
export class SupportRequestServiceService {
  private apiControllerUrl = `${environment.apiUrl}/supportRequests`;
  constructor(private http: HttpClient) {}

  getSupportRequestById(supportRequestId: number): Observable<GetSupportRequest> {
    return this.http.get<GetSupportRequest>(`${this.apiControllerUrl}/${supportRequestId}`);
  }

  updateSupportRequestById(supportRequestId: number, request: UpdateSupportRequest): Observable<GetSupportRequest> {
    return this.http.put<GetSupportRequest>(
      `${this.apiControllerUrl}/${supportRequestId}`,
      request
    );
  }

  deleteSupportRequestById(supportRequestId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiControllerUrl}/${supportRequestId}`);
  }

  getAllSupportRequestsWithPagination(
    request: PaginationRequest
  ): Observable<PaginationResponse<GetSupportRequest>> {
    return this.http.get<PaginationResponse<GetSupportRequest>>(
      `${this.apiControllerUrl}?pageNumber:${request.pageNumber}&pageSize:${request.pageSize}&direction:${request.direction}&sortBy:${request.sortBy}`
    );
  }

  addSupportRequest(request: AddSupportRequest): Observable<GetSupportRequest> {
    return this.http.post<GetSupportRequest>(this.apiControllerUrl, request);
  }

  getAllSupportRequestsByUserIdWithPagination(
    userId:number,
    request: PaginationRequest
  ): Observable<PaginationResponse<GetSupportRequest>> {
    return this.http.get<PaginationResponse<GetSupportRequest>>(
      `${this.apiControllerUrl}/supportRequestByUserId/${userId}?pageNumber:${request.pageNumber}&pageSize:${request.pageSize}&direction:${request.direction}&sortBy:${request.sortBy}`
    );
  }

}
