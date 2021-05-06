import { catchError } from 'rxjs/operators';
import { Catog } from './../models/catog';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServisesService {
  private apiURL = "https://localhost:44378/api";
  httpOptions={
    headers:new HttpHeaders({
     'Content Type':'application/json'
    })
  }
  constructor(private http:HttpClient ) { }

  getAll():Observable<Catog[]>{
return this.http.get<Catog[]>(this.apiURL+'/Categories').pipe(
  catchError(this.errorHandler)
)
  }
  create(cato:any): Observable<Catog> {
    return this.http.post<Catog>(this.apiURL
      +'/Categories',(cato))

  }
  find(id:any): Observable<Catog> {
    return this.http.get<Catog>(this.apiURL+'/Categories/'+ id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  update(id:any, cato:any): Observable<Catog> {
    return this.http.put<Catog>(this.apiURL + '/Categories/' + id, (cato))

  }
  delete(id:any){
    return this.http.delete<Catog>(this.apiURL + '/Categories/' + id)
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
