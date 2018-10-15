import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Data } from '../data';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private apiEndpoint = '';

  constructor(
    private http: HttpClient
  ) {}

  getData (): Promise<Data[]> {
    return this.http.get<Data[]>(this.apiEndpoint, httpOptions).toPromise();
  }

  addData (Data: Data): Promise<Data> {
    return this.http.post<Data>(this.apiEndpoint, Data, httpOptions).toPromise();
  }

}