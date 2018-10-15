import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Data } from '../data';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private apiEndpoint = '';

  constructor(
    private http: HttpClient
  ) {}

  getData (): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiEndpoint, httpOptions)
  }

  addData (Data: Data): Observable<Data> {
    return this.http.post<Data>(this.apiEndpoint, Data, httpOptions)
  }

}