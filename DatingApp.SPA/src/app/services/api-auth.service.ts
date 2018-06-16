// CORE ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RXJS
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {
  private _apiLocation: string;

  constructor(private _http: HttpClient) {
    this._apiLocation = 'http://localhost:5000/api/auth';
  }

  // TODO. update return type to User
  login(auth: { username: string; password: string }): Observable<{ tokenString: string }> {
    return this._http.post<{ tokenString: string }>(`${this._apiLocation}/login`, auth).pipe(
      catchError(error => throwError(error))
    );
  }
}
