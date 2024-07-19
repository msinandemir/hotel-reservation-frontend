import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetComment } from '../models/comment/get-comment';
import { UpdateComment } from '../models/comment/update-comment';
import { AddComment } from '../models/comment/add-comment';
import { PaginationResponse } from '../models/pagination/pagination-response';
import { PaginationRequest } from '../models/pagination/pagination-request';

@Injectable({
  providedIn: 'root',
})
export class CommentServiceService {
  private apiControllerUrl = `${environment.apiUrl}/comments`;
  constructor(private http: HttpClient) {}

  getCommentById(commentId: number): Observable<GetComment> {
    return this.http.get<GetComment>(`${this.apiControllerUrl}/${commentId}`);
  }

  updateCommentById(
    commentId: number,
    request: UpdateComment
  ): Observable<GetComment> {
    return this.http.put<GetComment>(
      `${this.apiControllerUrl}/${commentId}`,
      request
    );
  }

  deleteCommentById(commentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiControllerUrl}/${commentId}`);
  }

  addComment(request: AddComment): Observable<GetComment> {
    return this.http.post<GetComment>(this.apiControllerUrl, request);
  }

  getAllCommentsByUserId(
    userId: number,
    request: PaginationRequest
  ): Observable<PaginationResponse<GetComment>> {
    return this.http.get<PaginationResponse<GetComment>>(
      `${this.apiControllerUrl}/commentsByUserId/${userId}?pageNumber:${request.pageNumber}&pageSize:${request.pageSize}&direction:${request.direction}&sortBy:${request.sortBy}`
    );
  }

  getAllCommentsByHotelId(
    hotelId: number,
    request: PaginationRequest
  ): Observable<PaginationResponse<GetComment>> {
    return this.http.get<PaginationResponse<GetComment>>(
      `${this.apiControllerUrl}/commentsByHotelId/${hotelId}?pageNumber:${request.pageNumber}&pageSize:${request.pageSize}&direction:${request.direction}&sortBy:${request.sortBy}`
    );
  }
}
