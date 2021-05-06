import { Shop } from './../models/shop';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShopingServesService {

  private apiURL = "https://localhost:44378/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Shop[]> {
    return this.httpClient.get<Shop[]>(this.apiURL + '/Shopes')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(post:any): Observable<Shop> {
    return this.httpClient.post<Shop>(this.apiURL + '/Shopes', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:any): Observable<Shop> {
    return this.httpClient.get<Shop>(this.apiURL + '/Shopes/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:any, post:any): Observable<Shop> {
    return this.httpClient.put<Shop>(this.apiURL + '/Shopes/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:any){
    return this.httpClient.delete<Shop>(this.apiURL + '/Shopes/' + id, this.httpOptions)
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

