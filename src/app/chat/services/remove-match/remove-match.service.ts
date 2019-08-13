import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Globals } from 'src/app/globals';
import { RemoveMatchReturn } from './remove-match.return';

@Injectable({
  providedIn: 'root'
})
export class RemoveMatchService {

  public serviceURL = Globals.baseURL + 'removeMatch/';
  constructor(public http: HttpClient) { }

  removeUser(id_match): Observable<RemoveMatchReturn> {
    const option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get<RemoveMatchReturn>(this.serviceURL, option).pipe(
      catchError((err) => {
        console.log(err);
        return throwError('error');
      }),
    );
  }
}
