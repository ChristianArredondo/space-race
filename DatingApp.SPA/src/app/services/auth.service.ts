import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _apiLocation: string;

  constructor(private _http: HttpClient) {
    this._apiLocation = 'http://localhost:5000/api/auth';
  }

  // update return type to User
  login(auth: { username: string; password: string}): Observable<any> {
    return this._http.post(`${this._apiLocation}/login`, auth).pipe(
      tap(user => {
        if (user) {
          localStorage.setItem('token', user.tokenString);
        }
      })
    );
  }
}
