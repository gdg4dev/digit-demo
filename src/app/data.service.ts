// Add the backend api here and fetch the data

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getData(params: any): Observable<any[]> {
    // Mock data for example purposes
    const mockData = [
      { field1: 'Value 1', field2: 'Value 2' },
      { field1: 'Value 3', field2: 'Value 4' },
      // Add more mock data as needed
    ];
    return of(mockData);
  }
}
