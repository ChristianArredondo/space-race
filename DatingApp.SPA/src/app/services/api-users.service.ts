// CORE ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// ENV
import { environment } from '../../environments/environment';
// RXJS
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// MODELS
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {
  apiLocation = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  get(): Observable<User[]> {
    return this._http.get<User[]>(`${this.apiLocation}/users`).pipe(
      catchError(error => throwError(error))
    );
  }
}
