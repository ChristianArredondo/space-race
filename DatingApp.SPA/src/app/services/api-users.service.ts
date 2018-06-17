// CORE ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// RXJS
import { catchError } from 'rxjs/operators';
// MODELS
import { User } from '../models';
// ENV
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {
  private _apiLocation: string;

  constructor(private _http: HttpClient) {
    this._apiLocation = `${environment.apiUrl}/users`;
  }

  /** Fetches list of Users from server */
  get(token: string): Observable<User[]> {
    // TODO. add HttpInterceptor for all reusable HttpHeaders-related workflows
    const accessToken = `Bearer ${token}`;
    const headers = new HttpHeaders({ Authorization: accessToken });
    return this._http.get<User[]>(this._apiLocation, { headers }).pipe(
      catchError(err => throwError(err))
    );
  }
}
