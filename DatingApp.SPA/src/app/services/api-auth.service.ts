// CORE ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RXJS
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// MODELS
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {
  private _apiLocation: string;

  constructor(private _http: HttpClient) {
    this._apiLocation = 'http://localhost:5000/api/auth';
  }

  public login(auth: User): Observable<{ tokenString: string }> {
    return this._http.post<{ tokenString: string }>(`${this._apiLocation}/login`, auth).pipe(
      catchError(error => throwError(error))
    );
  }

  public register(auth: Partial<User>): Observable<void> {
    return this._http.post<void>(`${this._apiLocation}/register`, auth).pipe(
      catchError(error => throwError(error))
    );
  }

}
