import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetPhoto } from '../models/photo/get-photo';
import { UpdatePhoto } from '../models/photo/update-photo';
import { AddPhoto } from '../models/photo/add-photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoServiceService {
  private apiControllerUrl = `${environment.apiUrl}/photos`;
  constructor(private http: HttpClient) {}

  getPhotoById(photoId: number): Observable<GetPhoto> {
    return this.http.get<GetPhoto>(`${this.apiControllerUrl}/${photoId}`);
  }

  updatePhotoById(photoId: number, request: UpdatePhoto): Observable<GetPhoto> {
    return this.http.put<GetPhoto>(
      `${this.apiControllerUrl}/${photoId}`,
      request
    );
  }

  deletePhotoById(photoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiControllerUrl}/${photoId}`);
  }

  addPhoto(request: AddPhoto): Observable<GetPhoto> {
    return this.http.post<GetPhoto>(this.apiControllerUrl, request);
  }

  getAllPhotosByHotelId(hotelId: number): Observable<GetPhoto[]> {
    return this.http.get<GetPhoto[]>(
      `${this.apiControllerUrl}/hotelPhotos/${hotelId}`
    );
  }
}
