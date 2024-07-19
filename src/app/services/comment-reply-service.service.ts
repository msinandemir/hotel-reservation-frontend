import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetCommentReply } from '../models/comment-reply/get-comment-reply';
import { UpdateCommentReply } from '../models/comment-reply/update-comment-reply';
import { AddCommentReply } from '../models/comment-reply/add-comment-reply';
import { PaginationResponse } from '../models/pagination/pagination-response';
import { PaginationRequest } from '../models/pagination/pagination-request';

@Injectable({
  providedIn: 'root',
})
export class CommentReplyServiceService {
  private apiControllerUrl = `${environment.apiUrl}/commentReplies`;
  constructor(private http: HttpClient) {}

  getCommentReplyById(commentReplyId: number): Observable<GetCommentReply> {
    return this.http.get<GetCommentReply>(
      `${this.apiControllerUrl}/${commentReplyId}`
    );
  }

  updateCommentReplyById(
    commentReplyId: number,
    request: UpdateCommentReply
  ): Observable<GetCommentReply> {
    return this.http.put<GetCommentReply>(
      `${this.apiControllerUrl}/${commentReplyId}`,
      request
    );
  }

  deleteCommentReplyById(commentReplyId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiControllerUrl}/${commentReplyId}`);
  }

  addCommentReply(request: AddCommentReply): Observable<GetCommentReply> {
    return this.http.post<GetCommentReply>(this.apiControllerUrl, request);
  }

  getAllCommentRepliesByUserId(
    userId: number,
    request: PaginationRequest
  ): Observable<PaginationResponse<GetCommentReply>> {
    return this.http.get<PaginationResponse<GetCommentReply>>(
      `${this.apiControllerUrl}/commentRepliesByUserId/${userId}?pageNumber:${request.pageNumber}&pageSize:${request.pageSize}&direction:${request.direction}&sortBy:${request.sortBy}`
    );
  }
}
