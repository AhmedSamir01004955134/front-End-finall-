
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ItemPhto } from '../models/item-phto';


@Injectable({
  providedIn: 'root'
})
export class ItemPhtoService {

  private apiURL = "https://localhost:44378/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ItemPhto[]> {
    return this.httpClient.get<ItemPhto[]>(this.apiURL + '/ItemPhtoVms')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(post:any): Observable<ItemPhto> {
    return this.httpClient.post<ItemPhto>(this.apiURL + '/ItemPhtoVms', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:any): Observable<ItemPhto> {
    return this.httpClient.get<ItemPhto>(this.apiURL + '/ItemPhtoVms/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:any, post:any): Observable<ItemPhto> {
    return this.httpClient.put<ItemPhto>(this.apiURL + '/ItemPhtoVms/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:any){
    return this.httpClient.delete<ItemPhto>(this.apiURL + '/ItemPhtoVms/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}

