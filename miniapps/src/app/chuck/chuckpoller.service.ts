import { Injectable } from '@angular/core';

import { ChuckFact } from './models/chuckfact';
import { ChuckComponent } from './chuck.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ChuckpollerService {
  private chuckapiUrl = 'https://api.chucknorris.io/jokes/random';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public getFacts (): Observable<ChuckFact[]> {
    console.log("parsed:",this.http.get<ChuckFact[]>(this.chuckapiUrl));
    return this.http.get<ChuckFact[]>(this.chuckapiUrl)
      .pipe(
        tap(_ => console.log('facts fetched')),
        catchError(this.handleError<ChuckFact[]>('getFacts', []))
      );
  }
}
