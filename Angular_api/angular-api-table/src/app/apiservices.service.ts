
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { person } from './models/person';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPerson(): Observable<person[]> {
    return this.http.get<person[]>(this.apiUrl);
  }
  addPerson(payload: person): Observable<person>{
    return this.http.post<person>(this.apiUrl,payload);
}
deleteUser(userId: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${userId}`);
}
}