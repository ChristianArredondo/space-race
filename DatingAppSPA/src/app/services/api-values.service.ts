import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Value } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class ApiValuesService {
  private _apiLocation: string;

  constructor(private _http: HttpClient) {
    this._apiLocation = 'http://localhost:5000/api/values';
  }

  /** Fetches list of values from server/db */
  get(): Observable<Value[]> {
    return this._http.get<Value[]>(this._apiLocation).pipe(
      catchError(err => throwError(err))
    );
  }
}
