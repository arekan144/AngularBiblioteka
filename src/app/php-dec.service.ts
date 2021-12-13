import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }
  add(url: string, values: { nazw: string, mini: string, lata: string }): Observable<any> {
    return this.http.get<any>(url, {
      params: values,
    });
  }

}